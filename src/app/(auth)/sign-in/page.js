// import CenteredLayout from "@/components/CenteredLayout";
import Link from "next/link";
import Image from "next/image";
import SprinterLogo from "@/components/SprinterLogo";
import LoginForm from "@/components/LoginForm";


function Login() {
    return (
        <>
            <div className="bg-dark-interface-1 min-h-screen flex justify-center py-8">
                <div className="bg-dark-interface-2 p-[calc(40/16*1rem)] flex justify-center items-center flex-col gap-[40px] rounded-lg w-full min-w-2xs max-w-md">
                    <SprinterLogo />
                    <h6 className="text-interface font-bold text-28">Log In to continue</h6>
                    <LoginForm />

                    <div className="flex items-center text-sm text-secondary-100 w-full">
                        <span className="flex-grow border-t border-secondary-100"></span>
                        <span className="px-4">or</span>
                        <span className="flex-grow border-t border-secondary-100"></span>
                    </div>

                    <button className="bg-dark-interface-2 border border-interface text-interface p-3 rounded-lg flex justify-center items-center gap-2 w-full">
                        <Image src="/google.png" alt="Google image" width={20} height={20}/>
                        Continue with Google
                    </button>

                    <p className="text-secondary-300">Don&apos;t have an account? <Link href="sign-in/page" className="text-primary-500 underline">Sign Up</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login;