import { useRouter } from "next/navigation";
import CenteredLayout from "../CenteredLayout";
import Image from "next/image";
import Button from "../Button";
import { useEmail } from "@/contexts/EmailProvider";

function VerifiedEmail() {
    const router = useRouter();
    const { email } = useEmail()

    return (
        <>
            <CenteredLayout>
                <div className="flex justify-center m-0 p-0">
                    <Image src='/email-validated.png' alt="Image of a successfull email icon" width={48} height={48} />
                </div>

                <div className="text-secondary-300 text-center">
                    <h6 className="text-interface text-28 font-bold mb-5">Account Verified</h6>

                    <p className="">
                        Congratulations your email account, <span className="text-primary-500">{email}</span> has been verified.
                    </p>
                    
                </div>

                <Button onClick={() => router.push('/onboarding')}>
                    Continue
                </Button>

            </CenteredLayout>
        </>
    )
}

export default VerifiedEmail;