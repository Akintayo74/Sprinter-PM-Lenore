// import CenteredLayout from "@/components/CenteredLayout";
import SprinterLogo from "@/components/SprinterLogo";
import SignUpForm from "@/components/SignUp";


function SignUp() {
    return (
        <>
            <div className="bg-dark-interface-1 min-h-full flex flex-col items-center justify-center">
                <div className="bg-dark-interface-2 p-[calc(40/16*1rem)] flex justify-center items-center flex-col gap-[40px] rounded-lg ">
                    <SprinterLogo />
                    <h6 className="text-interface font-bold text-28">Sign up to continue</h6>
                    <SignUpForm />
                </div>
            </div>
        </>
    )
}

export default SignUp;