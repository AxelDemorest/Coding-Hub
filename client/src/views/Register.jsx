import React from 'react';
import FormInput from '../components/formInput/FormInput';

const Register = () => {

    return (
        <div>
            <form>
                <h1>De retour!</h1>
                <p>Merci d'entrer vos informations de connexion.</p>
            </form>
            <FormInput width='400px' />
        </div>
    );
};

export default Register;