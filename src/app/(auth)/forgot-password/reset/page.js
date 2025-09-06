"use client"
import React from "react";
import CenteredLayout from "@/components/Layout"
import Form from "@/components/Form";
import { api } from "@/lib/api";
import { useRouter, useSearchParams } from "next/navigation";

function ResetPasswordForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const [newPassword, setNewPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    const [errors, setErrors] = React.useState({})

    async function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true)
        setErrors({})

        if(newPassword !== confirmPassword) {
            setErrors({confirmPassword: "Passwords don't match"})
            setIsLoading(false)
            return
        }

        if(!newPassword || newPassword.length < 8) {
            setErrors({newPassword: "Passwords must be at least 8 characters"})
            setIsLoading(false)
            return
        }

        try {
            await api.resetPassword(newPassword, token)

            router.push('/forgot-password/success')
        } catch(error) {
            console.error(error)
            setErrors({password: error.message})

        } finally {
            setIsLoading(false)
        }
    }

    const fields = [
        {
            name: 'newPassword',
            label: 'Password',
            type: 'password',
            value: newPassword,
            onChange: (e) => setNewPassword(e.target.value),
            placeholder: 'Enter your newPassword',
            error: errors.newPassword,
        },
        {
            name: 'confirmPassword',
            label: 'Confirm Password',
            type: 'password',
            value: confirmPassword,
            onChange: (e) => setConfirmPassword(e.target.value),
            placeholder: 'Confirm your Password',
            error: errors.confirmPassword,
        }
    ]

    return (
        <CenteredLayout>
            <h6 className="text-28 font-bold text-interface mb-5">Set new password</h6>
            <Form
                fields={fields}
                onSubmit={handleSubmit}
                submitText="Continue"
                isLoading={isLoading}
            />
        </CenteredLayout>
    )
}

export default ResetPasswordForm;