"use client"
import React from "react"
import { useRouter, useSearchParams } from 'next/navigation'
import { api } from '@/app/lib/api'
import PendingVerification from "@/components/Verification/PendingVerification";
import ExpiredVerification from "@/components/Verification/ExpiredVerification";
import VerifiedEmail from "@/components/Verification/VerifiedEmail";
import VerificationError from "@/components/Verification/VerificationError";

function VerifyEmail() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [verificationState, setVerificationState] = React.useState('pending');
    const [email, setEmail] = React.useState('');
    const [isResending, setIsResending] = React.useState('');

    const handleEmailVerification = React.useCallback(async (token) => {
        try {
            //To-Do: Call API here
            const result = await api.verify(token)

            if(result.success) {
                setVerificationState('verified')
            }
             
        } catch(error) {
            console.error('Verification Error:', error)

            if(error.message.includes('expired')) {
                setVerificationState('expired')
            } else {
                setVerificationState('error')
            }
        }
    }, [])

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
        } catch(error) {
            console.error('Resend error: ', error);
            setIsResending(false);
        }
    }

    const RenderVerificationContent = () => {
        switch(verificationState) {
            case 'pending':
                return <PendingVerification 
                        email={email}
                        isResending={isResending}
                        onResend={handleResendVerification}
                    />

            case 'expired':
                return <ExpiredVerification 
                        onResend={handleResendVerification} 
                        isResending={isResending}
                    />

            case 'verified':
                return <VerifiedEmail email={email}/>

            case 'error':
                return <VerificationError onResend={handleResendVerification} isResending={isResending} />


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