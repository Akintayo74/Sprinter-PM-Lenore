// import CenteredLayout from "@/components/CenteredLayout";
import Link from "next/link";
import SprinterLogo from "@/components/SprinterLogo";
import SignUpForm from "@/components/SignUp";


function SignUp() {
    return (
        <>
            <div className="bg-dark-interface-1 min-h-full flex justify-center py-8">
                <div className="bg-dark-interface-2 p-[calc(40/16*1rem)] flex justify-center items-center flex-col gap-[40px] rounded-lg w-full min-w-2xs max-w-md">
                    <SprinterLogo />
                    <h6 className="text-interface font-bold text-28">Sign up to continue</h6>
                    <SignUpForm />
                    <p className="text-secondary-300">Already have an account? <Link href='sign-in/page' className="text-primary-500 hover:underline">Log in</Link></p>
                </div>
            </div>
        </>
    )
}

export default SignUp;