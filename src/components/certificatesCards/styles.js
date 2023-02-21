import styled from "styled-components";

const CardCert = styled.li`
  img {
    box-shadow: 2px 2px 5px var(--black);
    height: 456px;
    margin: 40px 0;
    border-radius: 8px;
  }

  @media (max-width: 800px){
    img{
      width: 90%;
      margin: 10px;
    }
  }
`;

export default CardCert