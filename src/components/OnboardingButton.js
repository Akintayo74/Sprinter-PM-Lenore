

function OnboardingButton({ children }) {

    return (
        <button className="px-6 py-3 border-2 border-primary-500 rounded-lg text-interface w-full inline-block text-center">
            { children }
        </button>
    )
}

export default OnboardingButton;