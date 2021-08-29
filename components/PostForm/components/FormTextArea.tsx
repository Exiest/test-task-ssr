import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import { FormTextArea } from '../styled'

type InputProps = FieldHookConfig<string> & { label: string, id: string }

const TextArea: React.FC<InputProps> = ({ label, id, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <>
        <label htmlFor={id}>{label}</label>
        <FormTextArea {...field} {...props} />
        {meta.touched && meta.error ? (
            <div>{meta.error}</div>
        ) : null}
        </>
    );
};

export default TextArea
