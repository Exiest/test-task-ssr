import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import { FormInput } from '../styled'

type InputProps = FieldHookConfig<string> & { label: string, id: string }

const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <>
        <label htmlFor={id}>{label}</label>
        <FormInput {...field} {...props} />
        {meta.touched && meta.error ? (
            <div>{meta.error}</div>
        ) : null}
        </>
    );
};

export default Input
