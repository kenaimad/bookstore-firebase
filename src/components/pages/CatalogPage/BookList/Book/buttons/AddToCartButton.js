import * as s from './AddToCartButton.styled';

const AddToCartButton = (props) => {
  return (
    <s.AddToCartContainer onClick={props.onClick}>
      <span>Do koszyka</span>
      <s.CartIcon src={require('../icons/cart-icon.png')} />
    </s.AddToCartContainer>
  );
};

export default AddToCartButton;
