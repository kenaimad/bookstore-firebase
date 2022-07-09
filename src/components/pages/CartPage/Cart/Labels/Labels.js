import * as s from './Labels.styled';

const Labels = (props) => {
  return (
    <s.Wrapper>
      <s.CoverLabel></s.CoverLabel>
      <s.InformationLabel>Informacje o produkcie</s.InformationLabel>
      <s.PriceLabel>Cena</s.PriceLabel>
      <s.QuantityLabel>Ilość</s.QuantityLabel>
      <s.PriceSumLabel>Łączna cena</s.PriceSumLabel>
      <s.removeContainer>Usuń</s.removeContainer>
    </s.Wrapper>
  );
};

export default Labels;
