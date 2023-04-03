// import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// const customTheme = extendTheme({
//   // your custom theme configuration goes here
// });

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};
// export const decorators = [
//   (Story) => (
//     <ChakraProvider theme={customTheme}>
//       <Story />
//     </ChakraProvider>
//   ),
// ];
