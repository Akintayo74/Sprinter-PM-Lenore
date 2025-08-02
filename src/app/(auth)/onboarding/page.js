"use client";
import React from 'react';
import Avatar from "@/components/Avatar";
import CenteredLayout from "@/components/CenteredLayout";
import OnboardingForm from "@/components/OnboardingForm";
import SprinterLogo from "@/components/SprinterLogo";
import { EmailContext } from "@/contexts/EmailProvider";

function Onboarding() {
  const { email } = React.useContext(EmailContext)
  const [avatarData, setAvatarData] = React.useState(null)
  console.log('This is the users email address', email)

  return (
    <>
      <div>
        <CenteredLayout>
          <SprinterLogo />
          <div className="text-secondary-300 text-center">
            <h6 className="text-interface text-28 mb-5 font-bold">
              Welcome To Sprinter
            </h6>
            <Avatar avatarData={avatarData} />
            <p className="">
              You are signed up as{" "}
              <span className="text-primary-500">{email}.</span> <br /> 
              {avatarData ? 'Confirm your name.' : 'Enter your first and last name.'}
            </p>
          </div>
          <OnboardingForm avatarData={avatarData} setAvatarData={setAvatarData} />
        </CenteredLayout>
      </div>
    </>
  );
}

export default Onboarding;
