import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BaseLayout from './layout/BaseLayout';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@chakra-ui/react/preset';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <BaseLayout />
    </ChakraProvider>
  </StrictMode>,
);
