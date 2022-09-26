import { useState } from 'react';
import styled from 'styled-components';

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { width, label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <FormGroup>
            <label>{label}</label>
            <SingleFormInput
                inputWidth={width}
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </FormGroup>
    );
};

const SingleFormInput = styled.input`
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    padding: 10px;
    width: ${props => props.inputWidth};
    color: grey;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`

export default FormInput;