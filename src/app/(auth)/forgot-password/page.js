"use client";
import React from 'react';
import CenteredLayout from "@/components/Layout";
import SprinterLogo from "@/components/Layout/SprinterLogo";
import Form from "@/components/Form";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';


function ForgotPassword() {
    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    async function handleSubmit(event) {
        event.preventDefault();

        // ✅ Debug what you're receiving
        console.log('handleSubmit called with:', { event, email });
        console.log('email state:', email);
        console.log('typeof email:', typeof email);

        setIsLoading(true)
        setErrors({})

        try {
            await api.resetPassword(email)

            router.push(`/forgot-password/sent?email=${encodeURIComponent(email)}`);
        } catch(error) {
            console.error(error)
            setErrors({email: error.message})
        } finally {
            setIsLoading(false)
        }
        
    }

    const fields = [
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: 'Enter your email',
            error: errors.email,
        }
    ]

    return (
        <>
            <CenteredLayout>
                <SprinterLogo />
                <div className="text-center">
                    <h6 className="text-28 font-bold text-interface mb-5">Forgot Password?</h6>
                    <p className="text-secondary-300 mb-2">
                        No worries, we'll send you reset instructions.
                    </p>
                </div>
                <Form
                    fields={fields}
                    onSubmit={handleSubmit}
                    submitText="Reset Password"
                    isLoading={isLoading}
                />
                <Link href='/sign-in' className='text-primary-500'>
                    Back to log in
                </Link>
            </CenteredLayout>
        </>
    )
}

export default ForgotPassword;