"use client"
import React from "react"
import Form from "./Form"
import { useRouter } from "next/navigation"

function OnboardingForm() {
    const router = useRouter;
    const [fomData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
    })
    const [isLoading, setIsLoading] = React.useState(false)
    const [errors, setErrors] = React.useState({})

    const handleChange = (field) => (event) => {
        setFormData((prev) => ({
            ...prev,
            [field]: event.target.value,
        }))
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        setIsLoading(true)

        try {


        } catch(error) {
            setErrors({ general: error.message})
        } finally {
            setIsLoading(false)
        }

    }

    const fields = [
        {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            value: FormData.firstName,
            onchange: handleChange('firstName'),
            placeholder: 'Lemon',
            error: errors.firstName,
            props: {
                required: true,
            },
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            value: FormData.lastName,
            onchange: handleChange('lastName'),
            placeholder: 'Squeezy',
            error: errors.lastName,
            props: {
                required: true,
            },
        },
    ]

    return (
        <Form 
            fields={fields}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            submitText="Continue..."
        />
    )
}

export default OnboardingForm;