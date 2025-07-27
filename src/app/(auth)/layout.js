"use client"
import EmailProvider from "@/contexts/EmailProvider"

export default function AuthLayout({ children }) {

    return (
        <EmailProvider>
            { children }
        </EmailProvider>
    )
}