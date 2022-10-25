import { StyledHeader, StyledAnchor } from "./styles";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";

const Header =() =>{
  return (
    <StyledHeader>
      <div>
        <img src="https://avatars.githubusercontent.com/u/95890402?v=4" alt="" />
        <h4>Ivanilton Neto </h4>
      </div>
      <nav>
        <StyledAnchor
          href="https://api.whatsapp.com/send?phone=5588988463171&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os."
          target="blank"
        >
          <p>Whatsapp</p>
          <BsWhatsapp />
        </StyledAnchor>
        <StyledAnchor
          href="https://www.linkedin.com/in/ivanilton-neto-a712a379/"
          target="blank"
        >
          <p>Linkedin</p>
          <BsLinkedin />
        </StyledAnchor>
        <StyledAnchor href="https://github.com/ivaniltonneto" target="blank">
          <p>Github</p>
          <BsGithub />
        </StyledAnchor>
      </nav>
    </StyledHeader>
  );
}
export default Header;
