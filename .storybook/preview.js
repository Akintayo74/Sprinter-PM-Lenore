// import '../src/app/globals.css';
// /** @type { import('@storybook/nextjs').Preview } */
// const preview = {
//   parameters: {
//     controls: {
//       matchers: {
//        color: /(background|color)$/i,
//        date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;

import '../src/app/globals.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true, // Enable if you're using Next.js 13+ app directory
    },
  },
};

export default preview;