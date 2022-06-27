import {
    ButtonsContainer,
    Title,
    DescriptionContainer,
    Wrapper,
    Description,
    StyledLogo,
    Author,
  } from './CartItem.styled';
  
  const CartItem = (props) => {
    return (
      <Wrapper>
        <DescriptionContainer>
          <Title>{props.title}</Title>
          <Author>Author: {props.author}</Author>
        </DescriptionContainer>
        <DescriptionContainer>
          <ButtonsContainer>
            {' '}
            <StyledLogo
              src={require('./icons/plus.png')}
              alt="addIcon"
              onClick={props.onAdd}
            />{' '}
            <StyledLogo
              src={require('./icons/minus.png')}
              alt="removeIcon"
              onClick={props.onRemove}
            />
          </ButtonsContainer>
          <Description>Amount: {props.amount} </Description>
          <Description>Price: {props.price * props.amount}</Description>
        </DescriptionContainer>
      </Wrapper>
    );
  };
  
  export default CartItem;