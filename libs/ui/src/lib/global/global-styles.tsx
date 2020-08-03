import { createGlobalStyle } from 'styled-components';

import { Colors } from '../enums';

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${Colors.primary};
    font-family: 'Nunito', sans-serif;
  }
`;
