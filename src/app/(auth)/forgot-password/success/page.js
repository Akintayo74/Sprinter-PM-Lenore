"use client"
import CenteredLayout from "@/components/Layout";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

function SuccessResettingPassword() {
    const router = useRouter()

    function handleSubmit() {
        router.push('/sign-in')
    }

    return (
        <CenteredLayout>
            <div className="text-center">
                <h6 className="text-28 font-bold text-interface mb-5">All done!</h6>
                <p className="text-secondary-300 mb-2">
                    Congratulations! Your password has been <br/> successfully reset.
                </p>
            </div>
            <Button onClick={handleSubmit} >Continue</Button>
        </CenteredLayout>
    )
}

export default SuccessResettingPassword