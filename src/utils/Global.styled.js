import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
* {
  font-family: sans-serif;
  color: ${Colors.primaryBackground};
}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
  }
`;

