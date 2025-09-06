"use client"
import CenteredLayout from "@/components/Layout"
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ResetLinkSent() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');

    return (
        <CenteredLayout>
            <Image src='/email-info.png' alt="Image of an email icon" width={48} height={48} />
            <div className="text-center">
                <h6 className="text-28 font-bold text-interface mb-5">Password Reset</h6>
                <p className="text-secondary-300 mb-2">
                    We've sent an email to <span className="text-primary-500">{email}.</span> <br/> Reset password using link via email.
                </p>
            </div>
            <p className="text-secondary-300">
                Didn't receive the Email? <Link href="/forgot-password" className='text-primary-500 underline'>Resend link</Link>
            </p>
        </CenteredLayout>
    )
}

export default ResetLinkSent;