import { useRouter } from "next/navigation";

function VerifiedEmail({ email }) {
    const router = useRouter();

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
    )
}

export default VerifiedEmail;