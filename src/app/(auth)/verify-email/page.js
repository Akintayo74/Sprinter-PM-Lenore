"use client"

import React from "react"
import { useRouter, useSearchParams } from 'next/navigation'

function VerifyEmail() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [verificationState, setVerificationState] = React.useState('pending');
    const [email, setEmail] = React.useState('');
    const [isResending, setIsResending] = React.useState('');

    const handleEmailVerification = React.useCallback(async (token) => {
        try {
            //To-Do: Call API here

            setTimeout(() => {  
                const mockSuccess = Math.random * 0.3;
                if(mockSuccess) {
                    setVerificationState('verified');

                    setTimeout(() => {
                        router.push('/');
                    }, 3000)
                } else {
                    setVerificationState('expired')
                }
            }, 2000)
             
        } catch(error) {
            console.error('Verification Error:', error);
            setVerificationState('error');
        }
    }, [router])

    React.useEffect(() => {
        const emailParams = searchParams.get('email');
        if(emailParams) {
            setEmail(decodeURIComponent(emailParams));
        } else {
            router.push('/about')
            return
        }

        const token = searchParams.get('token');
        if(token) {
            handleEmailVerification(token)
        }
    }, [searchParams, router, handleEmailVerification])

    

    const handleResendVerification = async(token) => {
        if (isResending) {
            return
        }

        setIsResending(true);

        try {
            //To-Do: Call API here

            setTimeout(() => {
                setVerificationState('pending');
                setIsResending(false)

                console.log('Verification link resent succesfully!')
            }, 1000)
 
        } catch(error) {
            console.error('Resend error: ', error);
            setIsResending(false);
        }
    }

    const handleVerifyManually = () => {
        const mockToken = 'mock-verification-token-12345';
        handleEmailVerification(mockToken);
    }

    const RenderVerificationContent = () => {
        switch(verificationState) {
            case 'pending':
                return (
                <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    </div>
                    <h1 className="text-2xl font-semibold text-white mb-4">Verify your email</h1>
                    <p className="text-gray-400 mb-2">
                    We&apos;ve sent an email to <span className="text-blue-400">{email}</span>.
                    </p>
                    <p className="text-gray-400 mb-6">
                    Continue account creation using the link via email.
                    </p>
                    <button 
                    onClick={handleVerifyManually}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg mb-4 transition-colors"
                    >
                    Verify email
                    </button>
                    <p className="text-gray-400 text-sm">
                    Didn&apos;t receive the Email?{' '}
                    <button 
                        onClick={handleResendVerification}
                        disabled={isResending}
                        className="text-blue-400 hover:text-blue-300 underline disabled:opacity-50"
                    >
                        {isResending ? 'Sending...' : 'Resend link'}
                    </button>
                    </p>
                </div>
                );

            case 'expired':
                return (
                <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                    </div>
                    <h1 className="text-2xl font-semibold text-white mb-4">Email verification link expired</h1>
                    <p className="text-gray-400 mb-6">
                    Looks like the email verification link has expired. No worries we can send the link again
                    </p>
                    <button 
                    onClick={handleResendVerification}
                    disabled={isResending}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                    >
                    {isResending ? 'Sending...' : 'Resend link'}
                    </button>
                </div>
                );

            case 'verified':
                return (
                <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    </div>
                    <h1 className="text-2xl font-semibold text-white mb-4">Account verified</h1>
                    <p className="text-gray-400 mb-2">
                    Congratulations! your email account{' '}
                    <span className="text-blue-400">{email}</span> has been verified
                    </p>
                    <button 
                    onClick={() => router.push('/dashboard')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors mt-6"
                    >
                    Continue
                    </button>
                </div>
                );

            case 'error':
                return (
                <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                    </div>
                    <h1 className="text-2xl font-semibold text-white mb-4">Verification failed</h1>
                    <p className="text-gray-400 mb-6">
                    Something went wrong during verification. Please try again.
                    </p>
                    <button 
                    onClick={handleResendVerification}
                    disabled={isResending}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                    >
                    {isResending ? 'Sending...' : 'Try again'}
                    </button>
                </div>
                );

            default:
                return null;
        }
    }

    return (
        <>
            <div className="bg-dark-interface-1 min-h-screen flex justify-center py-8">
                <div className="bg-dark-interface-2 p-[calc(40/16*1rem)] flex justify-center items-center flex-col gap-[40px] rounded-lg w-full min-w-2xs max-w-md">
                    <RenderVerificationContent />
                </div>
            </div>
        </>
    );
        
}

export default VerifyEmail;