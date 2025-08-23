"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "@/lib/api";
import PendingVerification from "@/components/Verification/PendingVerirfication";
import ExpiredVerification from "@/components/Verification/ExpiredVerification";
import VerifiedEmail from "@/components/Verification/VerifiedEmail";
import VerificationError from "@/components/Verification/VerificationError";
import { EmailContext } from "@/contexts/EmailProvider";

function VerifyEmail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setEmail } = React.useContext(EmailContext);

  const emailFromUrl = searchParams.get("email");
  const tokenFromUrl = searchParams.get("token");

  const [verificationState, setVerificationState] = React.useState("pending");
  const [isResending, setIsResending] = React.useState("");

  const handleEmailVerification = React.useCallback(async (token) => {
    try {
      await api.verify(token);

      if (emailFromUrl) {
        setEmail(emailFromUrl);
      }

      setVerificationState("verified");
      console.log(verificationState);
    } catch (error) {
      console.error("Verification Error:", error);

      if (error.message.includes("expired")) {
        setVerificationState("expired");
      } else {
        setVerificationState("error");
      }
    }
  }, []);

  React.useEffect(() => {
    if (tokenFromUrl) {
      handleEmailVerification(tokenFromUrl);
    }
  }, [searchParams, router, handleEmailVerification]);

  const handleResendVerification = async (token) => {
    if (isResending) {
      return;
    }
    setIsResending(true);

    try {
      //To-Do: Call API here
    } catch (error) {
      console.error("Resend error: ", error);
      setIsResending(false);
    }
  };

  const RenderVerificationContent = () => {
    switch (verificationState) {
      case "pending":
        return (
          <PendingVerification
            isResending={isResending}
            onResend={handleResendVerification}
          />
        );

      case "expired":
        return (
          <ExpiredVerification
            onResend={handleResendVerification}
            isResending={isResending}
          />
        );

      case "verified":
        return <VerifiedEmail />;

      case "error":
        return (
          <VerificationError
            onResend={handleResendVerification}
            isResending={isResending}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <RenderVerificationContent />
    </>
  );
}

export default VerifyEmail;
