import 'sanitize.css';
import { createGlobalStyle } from 'styled-components';

import { defaultFontFamilyName, FontType, getFontType } from './fonts';
import * as styles from 'src/styles';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  min-width: ${styles.PC_MIN_WIDTH};
}

body {
  margin: 0;
  padding: 0;
  font-family: ${defaultFontFamilyName};
  ${getFontType(FontType.BASE)}
  color: ${styles.ColorPalette.BLACK_1A1A1A};
}

a {
  color: inherit;
  text-decoration: none;
  font-family: ${defaultFontFamilyName};
}
button {
  font-family: ${defaultFontFamilyName};
}
ul {
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 1000px white inset !important;
}

dl,
dt,
dd {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

#__next {
  margin:0 auto;
  position: relative;
  overflow-x: hidden;
}

button, div, span, p, dl, input, textarea, table, tr, td {
  font-family: ${defaultFontFamilyName};
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
  
::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 10px;
}
  
::-webkit-scrollbar-thumb {
  background: ${styles.ColorPalette.BROWN_93653B};
  border-radius: 10px;
}

`;
