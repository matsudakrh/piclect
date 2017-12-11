import { injectGlobal } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

injectGlobal`
  body {
    line-height: 1.5;
    line-height-base: 1.65;
    letter-spacing: .1em;
    text-align: justify;
  }
`;