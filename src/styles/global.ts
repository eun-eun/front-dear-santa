import 'sanitize.css';
import { createGlobalStyle, css } from 'styled-components';

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
  cursor: url('$./cursor-default.svg'), default;
}

body {
  margin: 0;
  padding: 0;
  font-family: ${defaultFontFamilyName};
  ${getFontType(FontType.BASE)}
  background: ${styles.ColorPalette.ORANGE_FFF3D3};
  color: ${styles.ColorPalette.BLACK_1A1A1A};
}

a {
  color: inherit;
  text-decoration: none;
  cursor: url('./cursor-hover.svg'), pointer;
}
button {
  cursor: url('./cursor-hover.svg'), pointer;
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
  /* max-width: ${styles.PC_MAX_WIDTH}; */
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

@media screen and ((max-width: ${styles.BREAK_MAX_WIDTH}px) or (max-height:${
  styles.BREAK_MAX_HEIGHT
}px)) {
  .MuiTooltip-popper {
    display: none;
  }
}
`;

export const Draggable = css`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;

export const FlexRows_JustifyAlignCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexColu_AlignCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
