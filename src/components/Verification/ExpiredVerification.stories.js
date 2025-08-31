import ExpiredVerification from "./ExpiredVerification";

const meta = {
  title: "Authentication/ExpiredVerification",
  component: ExpiredVerification,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    isResending: {
      control: { type: 'boolean' },
      description: 'Shows loading state when resending verification email',
    },
    handleResendVerification: {
      action: 'resend-clicked',  // Built-in action - no import needed
      description: 'Function called when resend button is clicked',
    },
  },
};

export default meta;

export const Default = {
  args: {
    isResending: false,
  },
};

export const ResendingState = {
  args: {
    isResending: true,
  },
};