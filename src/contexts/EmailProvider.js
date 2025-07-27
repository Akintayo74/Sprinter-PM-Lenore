"use client"

import React from "react"

export const EmailContext = React.createContext()

function EmailProvider({ children }) {
    const [email, setEmail] = React.useState('')

    const value={
        email,
        setEmail,
    }

    return (
        <EmailContext.Provider value={value}>
            { children }
        </EmailContext.Provider>
    )
}


export const useEmail = () => {
  const context = React.useContext(EmailContext)
  if (!context) {
    throw new Error('useEmail must be used within an EmailProvider')
  }
  return context
}

export default EmailProvider;