import * as s from './Footer.styled';

const Footer = () => {
  return (
    <s.FooterContainer>
      <s.Container>
        <s.LogoWrapper>
          <img src={require('./icons/bookLogo.png')} alt="Logo Icon" />
        </s.LogoWrapper>
        <s.TextWrapper>
          <s.Line>
            <img src={require('./icons/mailIcon.png')} alt="Logo Icon" />
            <a href="mailto:damian.osieniecki@gmail.com">damian.osieniecki@gmail.com</a>
          </s.Line>
          <s.Line>
            <img src={require('./icons/gitIcon.png')} alt="Logo Icon" />
            <a href="https://github.com/kenaimad">https://github.com/kenaimad</a>
          </s.Line>
        </s.TextWrapper>
      </s.Container>
    </s.FooterContainer>
  );
};

export default Footer;
