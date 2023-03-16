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
import certificatesData from "../../components/certificatesCards/certificates";
import projects from "../../components/projectCard/projects";
import CertificatesCards from "../../components/certificatesCards";

function HomePage() {
  return (
    <>
      <Header />
      <AboutMe bgimage={star}>
        <div>
          <h4>Sobre Mim</h4>
          <p>
            Olá, eu sou o Ivanilton Neto, tenho 25 anos e sou desenvolvedor
            fullstack pela kenzie academy Brasil. Fui monitor na kenzie academy
            Brasil, onde foi possível desenvolver minhas habilidades técnicas,
            de comunicação e organização. A Kenzie é uma escola que simula o
            mercado de trabalho, portanto desenvolvi mais de 40 projetos entre
            front e back end, além de realizar projetos em equipe para o
            desenvolvimento na área de soft skills onde exerci as funções de QA,
            PO, Scrum e Teac Lead, você pode conferir alguns deles neste
            portfólio!
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
        <h4>Conhecimento</h4>
        <div>
          {stackData.map((stack, index) => (
            <Stack key={index} title={stack.title} Icon={stack.img} />
          ))}
        </div>
      </Stackscontainer>
      <Certificates>
        <h4>Certificados na área</h4>
        <ul>
          {certificatesData.map((certificates, index) => (
            <CertificatesCards
              key={index}
              title={certificates.title}
              Icer={certificates.certificate}
            />
          ))}
        </ul>
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
