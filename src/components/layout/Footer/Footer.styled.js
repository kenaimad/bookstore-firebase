import styled from 'styled-components';
import { Colors } from '../../../utils/Colors';

export const FooterContainer = styled.section`
  display: flex;
  width: 100%;
  height: 7vh;
  background-color: ${Colors.primaryBackground};
  border-top: 1px solid ${Colors.fontBaseColor};
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-content: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1rem;

  img {
    height: 100%;
  }
`;

export const TextWrapper = styled.div`
    display: flex;
    //justify-content: space-between;
    margin-top: .5rem;
    flex-direction: column;
`

export const Line = styled.div`
display: flex;
align-items: center;
height: 45%;

img {
    max-height: 70%;
    margin-right: 0.5rem;
}

a {
    text-decoration: none;
    color: ${Colors.fontBaseColor};
}
`


