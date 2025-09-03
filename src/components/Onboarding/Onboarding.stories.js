import Onboarding from "@/app/(auth)/onboarding/page";
import { AuthProvider } from "@/contexts/AuthProvider";

const meta = {
    title: 'Authentication/OnboardingPage',
    component: Onboarding,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
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
}

