'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthProvider'

export default function DashboardLayout({ children }) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  
  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/') 
    }
  }, [isAuthenticated, isLoading, router])
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Loading...</div>
      </div>
    )
  }
  
  
  if (!isAuthenticated) {
    return null
  }
  
  return (
    <div>
      {/* Add your dashboard navigation/header here later */}
      {children}
    </div>
  )
}