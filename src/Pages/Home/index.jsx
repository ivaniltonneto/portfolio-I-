import Header from "../../components/header";
import Stack from "../../components/stacksCard";
import ProjectCard from "../../components/projectCard";
import stackData from "../../components/stacksCard/stacks";
import {
  AboutMe,
  Porjectscontainer,
  Stackscontainer,
  Certificates,
  StyledFooter,
} from "./styles";
import star from "../../assets/videos/stars.gif";
import frontEnd from "../../assets/imgs/frontEnd.png";
import projects from "../../components/projectCard/projects";

function HomePage() {
  return (
    <>
      <Header />
      <AboutMe bgimage={star}>
        <div>
          <h4>Sobre Mim</h4>
          <p>
            Olá, eu sou o Ivanilton Neto, tenho 25 anos e sou desenvolvedor fullstack pela kenzie academy Brasil. No último ano decidi focar totalmente na programação web para solidificar meus conhecimentos na área e aprender novas tecnologias e linguagens assim como desenvolver novas habilidades em soft skills . Fui monitor na kenzie academy Brasil durante 8 meses em 2023, onde foi possível desenvolver minhas habilidades técnicas, de comunicação e organização. A Kenzie é uma escola que simula o mercado de trabalho, portanto desenvolvi mais de 40 projetos entre front e back end, além de realizar projetos em equipe para o desenvolvimento na área de soft skills onde exerci as funções de QA, PO, Scrum e Teac Lead.

          </p>
        </div>
      </AboutMe>
      <Porjectscontainer bgimage={star}>
        <h4>Meus Projetos</h4>
        <div className="projectCards">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index}></ProjectCard>
          ))}
        </div>
      </Porjectscontainer>
      <Stackscontainer>
        <h4>Tecnologias que usei</h4>
        <div>
          {stackData.map((stack, index) => (
            <Stack key={index} title={stack.title} Icon={stack.img} />
          ))}
        </div>
      </Stackscontainer>
      <Certificates>
        <h4>Certificados na área</h4>
        <div>
          <img src={frontEnd} alt="Certificado Front-End" />
        </div>
      </Certificates>
      <StyledFooter>
        <a
          target="blank"
          href="https://www.linkedin.com/in/ivanilton-neto-a712a379/"
        >
          Made by @IvaniltonNeto
        </a>
      </StyledFooter>
    </>
  );
}
export default HomePage;
