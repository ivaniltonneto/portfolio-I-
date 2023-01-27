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
          href="https://wa.me/5588982209797?text=Ol%C3%A1%2C+venho+por+meio+do+seu+portf%C3%B3lio+na+internet%2C+gostaria+de+conhecer+melhor+seus+servi%C3%A7os"
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
