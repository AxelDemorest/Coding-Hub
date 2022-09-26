import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../components/formInput/FormInput';
import jwt_decode from 'jwt-decode';

const axios = require('axios').default;



const Login = () => {

    const [isError, setIsError] = useState(false);

    const [isConnected, setIsConnected] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/auth/login', {
            email: values.email,
            password: values.password
        })
        .then((response) => {
            localStorage.setItem('JWT', response.data.access_token);
            localStorage.setItem('User', JSON.stringify(jwt_decode(response.data.access_token)));
            setIsConnected(true);
            console.log(JSON.stringify(jwt_decode(response.data.access_token)));
        })
        .catch((error) => {
            setIsError(true);
        });
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const connected = () => {
        if (localStorage.getItem('JWT')) {
            setIsConnected(true);
        }
    }
    connected();
            

    if(isConnected){
        window.location.href = '/';
    } else {
        return (
            <LoginForm>
                <LeftForm className="left">
                    <HeadForm>
                        <FormTitle>Bienvenue !</FormTitle>
                        <p>Merci d'entrer vos informations de connexion</p>
                    </HeadForm>
                    <FormLogin onSubmit={handleSubmit}>
                        <FormGroup>
                            {isError && <span>Email ou mot de passe incorrect !</span>}
                            {inputs.map((input) => (
                                <Input
                                    with="100%"
                                    key={input.id}
                                    {...input}
                                    value={values[input.name]}
                                    onChange={onChange}
                                />
                            ))}
                        </FormGroup>
                        <Button type="submit">Se connecter</Button>
                    </FormLogin>
                    <NoAccountText>Vous n'avez pas encore de compte ? <a href="/inscription">Inscrivez-vous !</a></NoAccountText>
                </LeftForm>
                <RightImg className="right"></RightImg>
            </LoginForm>
        )
    }
}

const NoAccountText = styled.p`
    margin-top: 22px;
`

const Button = styled.button`
    width: 50%;
    height: 40px;
    background-color: #A77FF2;
    border-style: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #8B6ED8;
    }
`

const Input = styled(FormInput)`
    margin: 3px 0;
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