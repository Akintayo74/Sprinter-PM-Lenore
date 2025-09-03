import VerifiedEmail from "@/components/Verification/VerifiedEmail";
import { AuthProvider } from "@/contexts/AuthProvider";

const meta = {
  title: "Authentication/VerifiedEmail",
  component: VerifiedEmail,
  parameters: {
    layout: "fullscreen",
    // Mock Next.js router at the story level
    nextjs: {
      router: {
        push: (path) => console.log("Navigate to:", path),
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  decorators: [
    (Story) => (
      <AuthProvider>
        <Story />
      </AuthProvider>
    ),
  ],
};

export const LongEmail = {
  decorators: [
    (Story) => (
      <EmailContext.Provider
        value={{
          email: "very.long.email.address@company-name.com",
          setEmail: () => {},
        }}
      >
        <Story />
      </EmailContext.Provider>
    ),
  ],
};

export const ShortEmail = {
  decorators: [
    (Story) => (
      <EmailContext.Provider
        value={{
          email: "a@b.co",
          setEmail: () => {},
        }}
      >
        <Story />
      </EmailContext.Provider>
    ),
  ],
};
