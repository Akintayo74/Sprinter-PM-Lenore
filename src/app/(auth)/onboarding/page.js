"use client";
import CenteredLayout from "@/components/CenteredLayout";
import OnboardingForm from "@/components/OnboardingFile";
import SprinterLogo from "@/components/SprinterLogo";
import { useEmail } from "@/contexts/EmailProvider";

function Onboarding() {
  const { email } = useEmail();

  return (
    <>
      <div>
        <CenteredLayout>
          <SprinterLogo />
          <div className="text-secondary-300 text-center">
            <h6 className="text-interface text-28 mb-5 font-bold">
              Welcome To Sprinter!
            </h6>

            <p className="">
              You&apos;re signed up as{" "}
              <span className="text-primary-500">{email}</span> <br /> Enter
              your first and last name.
            </p>
          </div>
          <OnboardingForm />
        </CenteredLayout>
      </div>
    </>
  );
}

export default Onboarding;
