import { useState } from 'react';
import CartButton from './CartButton/CartButton';
import * as s from './Navbar.styled';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuAfterClick = () => {
    if (document.documentElement.clientWidth < 640) {
      setIsOpen(false);
    }
  };

  return (
    <s.NavContainer>
      <s.LogoContainer>
        <img src={require('./icons/bookLogo.png')} alt="Book Icon" />
      </s.LogoContainer>
      <s.NavListContainer open={isOpen} onClick={closeMenuAfterClick}>
        <s.ListElement>
          <s.NavLink to="/catalog">Catalog</s.NavLink>
        </s.ListElement>
        <s.ListElement>
          <s.NavLink to="/cart"><CartButton /></s.NavLink>
        </s.ListElement>
      </s.NavListContainer>
      <s.IconContainer>
        <img
          onClick={toggleIsOpen}
          src={require('./icons/openBurger.png')}
          alt="Burger Icon"
        />
      </s.IconContainer>
    </s.NavContainer>
  );
};

export default Navbar;
