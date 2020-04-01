import { createGlobalStyle } from 'styled-components';

import KaushanScript from './kaushanscript-regular-webfont.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: Kaushan Script;
    src: url(${KaushanScript});
  }
`