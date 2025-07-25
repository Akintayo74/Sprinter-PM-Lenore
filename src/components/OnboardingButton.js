import Link from "next/link";
import clsx from "clsx";

function OnboardingButton({ children, variant = "primary", ...props }) {
  return (
    <Link
      {...props}
      className={clsx(
        "px-6 py-3 border-2 border-primary-500 rounded-lg text-interface w-full inline-block text-center",
        {
          "bg-primary-500": variant === "primary",
          "bg-inherit": variant === "secondary",
        }
      )}
    >
      {children}
    </Link>
  );
}

export default OnboardingButton;
