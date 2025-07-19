"use client";
import React from "react";
import Form from "./Form";

function SignUpForm() {
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    });
    
    const [errors, setErrors] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(false);

    const handleChange = (field) => (event) => {
        setFormData((prev) => ({
            ...prev,
            [field]: event.target.value,
        }))
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        setIsLoading(true);
        console.log(isLoading);

        try {
            console.log(formData);
        } catch(error) {
            setErrors({ general: error.message});
        } finally {
            setIsLoading(false);
        }
    }

    const fields = [
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            value: formData.email,
            onChange: handleChange('email'),
            placeholder: 'Enter your email',
            error: errors.email,
            props: {
                required: true,
            }
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            value: formData.password,
            onChange: handleChange('password'),
            placeholder: 'Enter your password',
            error: errors.password,
            props: {
                minLength: 8,
                required: true,
            }
        }
    ]


    return (
        <Form 
            fields={fields}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            submitText="Continue"
        />
    )
    
}

export default SignUpForm;