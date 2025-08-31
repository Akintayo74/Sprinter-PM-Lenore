import CenteredLayout from "../Layout";
import Image from "next/image";

function ExpiredVerification({ isResending, handleResendVerification}) {

    return (
        <CenteredLayout>
            <div className="text-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Image src='/email-error.png' alt="Image of a failed Image Icon" width={48} height={48} />
                </div>
                <h6 className="text-28 font-bold text-interface mb-5">Email verification link expired</h6>
                <p className="text-secondary-300 mb-6">
                    Looks like the email verification link has <br/ > expired. No worries we can send the link again
                </p>
                <button 
                    onClick={handleResendVerification}
                    disabled={isResending}
                    className="w-full bg-primary-500 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                >
                    {isResending ? 'Sending...' : 'Resend link'}
                </button>
            </div>
        </CenteredLayout>
    )   
}

export default ExpiredVerification;