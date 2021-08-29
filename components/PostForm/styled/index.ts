import styled, { css } from 'styled-components'
import { Form } from 'formik'

export const StyledForm = styled(Form)`
    width: 600px;

    display: flex;

    flex-direction: column;
    align-items: center;
    text-align: left;
`

const FormControlMixin = css`
    width: 100%;

    display: inline-block;

    margin: 8px 0;
    padding: 12px 20px;

    border: 1px solid #ccc;
    border-radius: 4px;

    font-family: Open-Sans;
    font-size: 20px;

    outline: 0;
`

export const FormGroup = styled.div`
    width: 100%;
`

export const FormTitle = styled.h2`
    font-family: 'Fritz';
    font-weight: 500;
    font-size: 26px;

    text-align: center;
`

export const FormInput = styled.input`
    ${FormControlMixin}
`

export const FormTextArea = styled.textarea`
    ${FormControlMixin}

    resize: none;
`

export const FormButton = styled.button`
    ${FormControlMixin}
    cursor: pointer;

    width: 200px;

    border-radius: 10px;
    background-color: rgb(100,100,100);

    color: #fff;

    &:hover {
        background-color: rgb(150,150,150);
    }
`