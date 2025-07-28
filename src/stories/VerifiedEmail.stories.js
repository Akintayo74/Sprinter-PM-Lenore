// import VerifiedEmail from '@/components/Verification/VerifiedEmail';

// // Story metadata
// export default {
//   title: 'Authentication/VerifiedEmail',
//   component: VerifiedEmail,
//   parameters: {
//     layout: 'centered', // Center the component in Storybook
//   },
//   tags: ['autodocs'], // Auto-generate documentation
// };

// // Default story
// export const Default = {
//   args: {
//     email: 'john.doe@example.com',
//   },
// };

// // Different email examples
// export const LongEmail = {
//   args: {
//     email: 'very.long.email.address@company-name.com',
//   },
// };

// export const ShortEmail = {
//   args: {
//     email: 'a@b.co',
//   },
// };

import VerifiedEmail from '@/components/Verification/VerifiedEmail';
import { EmailContext } from '@/contexts/EmailProvider';

const meta = {
  title: 'Authentication/VerifiedEmail',
  component: VerifiedEmail,
  parameters: {
    layout: 'padded',
    // Mock Next.js router at the story level
    nextjs: {
      router: {
        push: (path) => console.log('Navigate to:', path),
      },
    },
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
};

export const LongEmail = {
  decorators: [
    (Story) => (
      <EmailContext.Provider value={{ 
        email: 'very.long.email.address@company-name.com', 
        setEmail: () => {} 
      }}>
        <Story />
      </EmailContext.Provider>
    ),
  ],
};

export const ShortEmail = {
  decorators: [
    (Story) => (
      <EmailContext.Provider value={{ 
        email: 'a@b.co', 
        setEmail: () => {} 
      }}>
        <Story />
      </EmailContext.Provider>
    ),
  ],
};