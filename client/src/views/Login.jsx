import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import FormInput from '../components/formInput/FormInput';
import Alert from '@mui/material/Alert';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useLocation } from "react-router-dom";
import jwt_decode from 'jwt-decode';

const axios = require('axios').default;

const Login = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { dispatch } = useContext(AuthContext)
    const [isError, setIsError] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const inputs = [
        {
            id: 1,
            type: 'email',
            name: 'email',
            placeholder: 'Votre email',
            required: true,
            label: 'Email',
        },
        {
            id: 2,
            type: 'password',
            name: 'password',
            placeholder: 'Mot de passe',
            required: true,
            label: 'Mot de passe',
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await axios.post('http://localhost:3001/auth/login', values);
            dispatch({ type: "LOGIN_SUCCESS", payload: jwt_decode(user.data.access_token) });
            navigate(state?.path || "/", { replace: true });
        } catch(err) {
            console.log(err);
            setIsError(true);
        }
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
            
    return (
        <LoginForm>
            <LeftForm className="left">
                <FormLogin onSubmit={handleSubmit}>
                    <HeadForm>
                        <FormTitle>Bienvenue !</FormTitle>
                        <FormHeaderDescription>Merci d'entrer vos informations de connexion</FormHeaderDescription>
                    </HeadForm>
                    <FormGroup>
                        {isError && <Alert severity="error" style={{ marginBottom: '15px' }}>Email ou mot de passe incorrect !</Alert>}
                        {inputs.map((input) => (
                            <FormInput
                                with="100%"
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}
                        <Button type="submit">Se connecter</Button>
                    </FormGroup>
                </FormLogin>
                <NoAccountText>Vous n'avez pas encore de compte ? <a href="/inscription">Inscrivez-vous !</a></NoAccountText>
            </LeftForm>
            <RightImg className="right"></RightImg>
        </LoginForm>
    )
}

const NoAccountText = styled.p`
    margin-top: 22px;
`

const Button = styled.button`
    &:hover {
        background-color: #8B6ED8;
    }
    cursor: pointer;
    width: 100%;
    background-color: #A77FF2;
    font-weight: bold;
    border: none;
    padding: 10px;
    color: white;
    border-radius: 5px;
`

const HeadForm = styled.div`
    margin-bottom: 30px;
    text-align: center;
`

const FormGroup = styled.div`
    margin-bottom: 20px;
    width: 60%;
`

const FormTitle = styled.h1`
    margin-bottom: 10px;
`

const FormHeaderDescription = styled.h1`
    font-size: 12px;
`;

const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`

const LoginForm = styled.div`
    display: flex;
    height: 100vh;
`

const LeftForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50%;
`

const RightImg = styled.div`
    position: relative;
    width: 50%;
    background: center/cover no-repeat url('https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80');
    /* background-color: grey; */
`

export default Login;