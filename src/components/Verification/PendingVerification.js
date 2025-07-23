

function PendingVerification({ email, isResending, handleResendVerification }) {
    
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
                // onClick={handleVerifyManually}
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
    )

}

export default PendingVerification;