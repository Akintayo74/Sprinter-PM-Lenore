"use client"
import React from "react"
import Form from "./Form"
import { avatarColors } from '@/app/lib/constants/colors'

function OnboardingForm({ avatarData, setAvatarData }) {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
    })
    const [isLoading, setIsLoading] = React.useState(false)
    const [errors, setErrors] = React.useState({})
    const [showConfirmation, setShowConfirmation] = React.useState(false)

    const handleChange = (field) => (event) => {
        setFormData((prev) => ({
            ...prev,
            [field]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)

        try {
            if(!showConfirmation) {
                //First submit
                const firstInitial = formData.firstName?.charAt(0).toUpperCase() || ''
                const secondInitial = formData.lastName?.charAt(0).toUpperCase() || ''
                const initials = firstInitial + secondInitial
                // Generate consistent color based on name
                // This ensures the same user always gets the same color
                const fullName = `${firstName}${lastName}`.toLowerCase()
                let hash = 0
                
                for (let i = 0; i < fullName.length; i++) {
                    hash = fullName.charCodeAt(i) + ((hash << 5) - hash)
                }   
                const colorIndex = Math.abs(hash) % avatarColors.length
                const backgroundColor = avatarColors[colorIndex]

                const newAvatarData =  { initials, backgroundColor }
                setAvatarData(newAvatarData)
                setShowConfirmation(true)
            } else {
                //second submit -- ToDo- Call api here
                console.log('Completing profile with:', { formData, avatarData })
            }

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
            value: formData.firstName,
            onChange: handleChange('firstName'),
            placeholder: 'Lemon',
            error: errors.firstName,
            props: {
                required: true,
                disabled: showConfirmation,
            },
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            value: formData.lastName,
            onChange: handleChange('lastName'),
            placeholder: 'Squeezy',
            error: errors.lastName,
            props: {
                required: true,
                disabled: showConfirmation,
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