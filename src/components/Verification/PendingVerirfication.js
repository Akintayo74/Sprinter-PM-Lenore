import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import CenteredLayout from "../Layout";

function PendingVerification({ isResending, onResend }) {
    const searchParams = useSearchParams()
    const emailFromUrl = searchParams.get('email')
    return (
        <>
            <CenteredLayout>
                <div className="flex justify-center">
                    <Image src='/email-info.png' alt="Image of an email icon" width={48} height={48} />
                </div>

                <div className="text-secondary-300 text-center">
                    <h6 className="text-interface text-28 font-bold mb-5">Verify your email</h6>

                    <p className="">
                        We&apos;ve sent an email to <span className="text-primary-500">{emailFromUrl}</span>.
                    </p>
                    <p className="">
                        Continue account creation using the link via email.
                    </p>
                </div>

                <p className="text-secondary-300">
                    Didn&apos;t receive the Email?{' '}
                    <button 
                        onClick={onResend}
                        href="/sign-in"
                        className="text-primary-500 underline cursor-pointer"
                    >
                        {isResending ? 'Sending...' : 'Resend link'}
                    </button>
                </p>
            </CenteredLayout>
        </>
    )

}

export default PendingVerification;