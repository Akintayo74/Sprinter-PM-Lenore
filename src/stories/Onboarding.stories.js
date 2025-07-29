import Onboarding from "@/app/(auth)/onboarding/page";
import { EmailContext } from "@/contexts/EmailProvider";

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
            <EmailContext.Provider value={{
                email: 'john.doe@example.com',
                setEmail: () => {}
            }}>
                <Story />
            </EmailContext.Provider>
        ),
    ],
}

