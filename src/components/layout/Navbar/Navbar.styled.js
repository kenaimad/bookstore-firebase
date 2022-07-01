import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { Colors } from '../../../utils/Colors';

export const NavContainer = styled.div`
  display: flex;
  color: ${Colors.fontBaseColor};
  top: 0;
  width: 100%;
  border-top: 1px solid ${Colors.fontBaseColor};
  border-bottom: 1px solid ${Colors.fontBaseColor};
  height: 7vh;
  background-color: ${Colors.primaryBackground};

  @media (max-width: 640px) {
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  margin-left: 2rem;
  flex-grow: 1;
  img {
    height: 100%;
  }
`;

export const NavListContainer = styled.div`
  justify-self: flex-end;
  display: flex;
  height: 100%;
  width: 60%;

  @media (max-width: 640px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 90vh;
    width: 100vw;
    margin-top: 6rem;
  }
`;

export const ListElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  text-align: center;
  height: 100%;
  width: 100%;
  border-left: 1px solid ${Colors.fontBaseColor};
  transition: all 0.1s ease-in;
  background-color: ${Colors.primaryBackground};

  &:hover {
    color: ${Colors.activeElementColor};
  }

  @media (max-width: 640px) {
    border-top: 1px solid ${Colors.fontBaseColor};
    font-size: 3rem;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  color: ${Colors.fontBaseColor};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  transition: all 0.2s ease-in;

  &.active {
    background-color: ${Colors.activeElementColor};
  }

  &:hover {
    color: white;
  }

  @media (max-width: 640px) {
    border-top: 1px solid ${Colors.fontBaseColor};
    font-size: 3rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2rem;

  img {
    height: 80%;
    cursor: pointer;
  }

  @media (min-width: 640px) {
    display: none;
  }
`;
