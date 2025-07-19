import CenteredLayout from "@/components/CenteredLayout";
import SprinterLogo from "@/components/SprinterLogo";
import SignUpForm from "@/components/SignUp";


function SignUp() {
    return (
        <>
            <CenteredLayout>
                <SprinterLogo />
                <h6 className="text-interface font-bold text-28">Sign up to continue</h6>
                <SignUpForm />
            </CenteredLayout>
        </>
    )
}

export default SignUp;