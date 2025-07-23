
function ExpiredVerification({ isResending, handleResendVerification}) {

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
    )
}

export default ExpiredVerification;