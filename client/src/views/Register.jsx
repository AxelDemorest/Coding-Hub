import { useState } from 'react';
import FormInput from '../components/formInput/FormInput';
import styled from 'styled-components';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";

const axios = require('axios').default;

const Register = () => {
    const navigate = useNavigate();
    const [isUserCreate, setIsUserCreate] = useState(false)
    const [isFormError, setIsFormError] = useState(false)
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
      });

    const inputs = [
        {
          id: 1,
          name: "first_name",
          type: "text",
          placeholder: "Indiquez votre prénom",
          errorMessage:
            "Le prénom doit comprendre entre 1 et 30 caractères et ne doit pas contenir de caractères spéciaux.",
          label: "Prénom",
          pattern: "^[A-Za-z0-9]{1,30}$",
          required: true,
        },
        {
            id: 2,
            name: "last_name",
            type: "text",
            placeholder: "Indiquez votre nom de famille",
            errorMessage: "Le nom de famille doit comprendre entre 1 et 30 caractères et ne doit pas contenir de caractères spéciaux.",
            label: "Nom de famille",
            pattern: "^[A-Za-z0-9]{1,30}$",
            required: true,
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "Indiquez votre adresse email",
          errorMessage: "Veuillez indiquer une adresse email valide.",
          label: "Adresse email",
          required: true,
        },
        {
          id: 4,
          name: "password",
          type: "password",
          placeholder: "Veuillez indiquer votre mot de passe",
          errorMessage:
            "Le mot de passe doit comprendre entre 8 et 20 caractères et au moins 1 lettre, 1 nombre et 1 caractère spécial.",
          label: "Mot de passe",
          pattern: `[a-z]{5,10}`,
          required: true,
        },
        {
          id: 5,
          name: "confirm_password",
          type: "password",
          placeholder: "Confirmez le mot de passe",
          errorMessage: "Les mots de passe ne correspondent pas.",
          label: "Confirmation du mot de passe",
          pattern: values.password,
          required: true,
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/user/user', values)
            setIsUserCreate(true);
            setTimeout(() => {
                navigate("/", { replace: true });
            }, 2000);
        } catch(err) {
            setIsFormError(true);
        } 
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value})
    }

    return (
        <Container>
            <Snackbar open={isUserCreate} autoHideDuration={6000}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Inscription effectuée avec succès!
                </Alert>
            </Snackbar>
            <Snackbar open={isFormError} autoHideDuration={6000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    Une erreur s'est produite, veuillez recharger la page.
                </Alert>
            </Snackbar>
            <LeftContainer>
                <FormRegister onSubmit={handleSubmit}>
                    <FormHeader>
                        <FormHeaderTitle>De retour!</FormHeaderTitle>
                        <FormHeaderDescription>Merci d'entrer vos informations de connexion.</FormHeaderDescription>
                    </FormHeader>
                    {inputs.map((input) => (
                        <FormInput 
                            key={input.id}
                            width='100%'
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <SubmitButton>S'inscrire</SubmitButton>
                </FormRegister>
            </LeftContainer>
            <RightContainer>
            </RightContainer>
        </Container>
    );
};

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
`;

const FormRegister = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

const FormHeader = styled.div`
    text-align: center;
    margin-bottom: 40px;
`;

const FormHeaderTitle = styled.h1`
    margin-bottom: 5px;
`;

const FormHeaderDescription = styled.h1`
    font-size: 12px;
`;

const SubmitButton = styled.button`
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
`;

const LeftContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    background: center/cover no-repeat url('https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80');
`;

export default Register;