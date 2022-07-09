import * as s from './CartItem.styled';

const CartItem = (props) => {
  return (
    <s.Wrapper>
      <s.CoverContainer>
        <img src={props.cover} alt="Cover" />
      </s.CoverContainer>
      <s.InformationContainer>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
      </s.InformationContainer>
      <s.PriceContainer>
        <h1>{props.price} zł</h1>
      </s.PriceContainer>
      <s.QuantityContainer>
        <button onClick={props.onAdd}>+</button>
        <span>{props.amount}</span>
        <button onClick={props.onRemove}>-</button>
      </s.QuantityContainer>
      <s.PriceContainer>
        <s.MobileLabel>Łączna cena:</s.MobileLabel><h1>{props.amount * props.price} zł</h1>
      </s.PriceContainer>
      <s.removeContainer>
        <img src={require('./icons/delete-icon.png')} alt="Remove icon" />
      </s.removeContainer>
    </s.Wrapper>
  );
};

export default CartItem;
