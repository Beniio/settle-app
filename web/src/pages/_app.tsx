import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'

import theme from '../theme'

function MyApp() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
