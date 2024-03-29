import styled from "styled-components";

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 448px;
  color: var(--white);
  box-shadow: var(--black) 2px 2px 5px;
  ${({ bgimage }) =>
    `  background-image: linear-gradient(to top, transparent 0%,#166fb7 250%), url(${bgimage});`};

  background-size: cover;

  h4 {
    font-family: var(--ff-heading);
    font-size: 25px;
    margin-top: 27px;
    margin-bottom: 10px;
    text-shadow: 3px 3px 3px var(--black);
  }
  p {
    text-shadow: 3px 3px 3px var(--black);
    font-size: 23px;
    text-align: justify;
  }

  div {
    padding-left: 50px;
    width: 50%;
  }

  @media (max-width: 1400px) {
    div {
      margin-top: 6%;
      width: 75%;
    }
  }

  @media (max-width: 800px) {
    div {
      margin-top: 0;
      padding-left: 20px;
      width: 90%;
    }
  }
`;

export const Porjectscontainer = styled.div`
  width: 100%;

  ${({ bgimage }) =>
    `
  background: url("${bgimage}") no-repeat ;
  `};
  background-size: cover;

  .projectCards {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  h4 {
    color: var(--white);
    font-family: var(--ff-heading);
    text-shadow: 3px 3px 3px var(--black);
    font-size: 25px;
    padding: 10px 50px 15px 50px;
  }
  @media (max-width: 800px) {
    h4 {
      font-size: 20px;
      padding: 20px;
    }
  }
`;

export const Stackscontainer = styled.div`
  background-color: #0b0b0b;
  width: 100%;
  border-top: 1px solid var(--blue);
  border-top: 1px solid var(--blue);

  h4 {
    color: var(--white);
    font-family: var(--ff-heading);
    text-shadow: 3px 3px 3px var(--black);
    font-size: 25px;
    padding: 30px 50px;
  }

  div {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media (max-width: 800px) {
    h4 {
      font-size: 20px;
      padding: 20px;
    }
  }
`;

export const Certificates = styled.section`
  border-top: 2px solid var(--fixedblack);
  border-bottom: 2px solid var(--fixedblack);
  background-color: #101010;
  padding: 10px 50px;

  h4 {
    font-family: var(--ff-heading);
    font-size: 25px;
    margin-bottom: 10px;
    width: 100%;
    color: var(--white);
    text-align: start;
    text-shadow: 3px 3px 3px var(--black);
  }
  ul {
    display: flex;
    gap: 1em;
    overflow-x: auto;
  }
  ul::-webkit-scrollbar {
    width: 1px;
  }

  ul::-webkit-scrollbar-track {
    background: #000;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: var(--blue);
  }

  @media (max-width: 800px) {
    padding: 10px;
    h4 {
      font-size: 20px;
      padding: 20px;
    }
    ul {
      flex-direction: column;
    }
  }
`;

export const StyledFooter = styled.footer`
  background-color: var(--black);
  color: #333333;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 12px;
    text-align: center;
  }
`;
