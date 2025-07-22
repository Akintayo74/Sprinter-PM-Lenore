"use client";
import React from "react";
import Form from "./Form";
import { useRouter } from "next/navigation";

function SignUpForm() {
    const router = useRouter();
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
            // router.push('/verify-email')
            const response = await fetch('/sign-up', {
                method: 'POST',
                body: JSON.stringify({ email: formData.email, password: formData.password }),
            });

            if (response.ok) {
                const mockToken = 'mock-verification-token-123'; // Ideally from backend response
                router.push(`/verify-email?email=${encodeURIComponent(email)}&token=${mockToken}`);
            }

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