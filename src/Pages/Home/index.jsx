import Header from "../../components/header";
import { Stack } from "../../components/stacksCard";
import ProjectCard from "../../components/projectCard";
import { stackData } from "../../components/stacksCard/stacks";
import {
  AboutMe,
  Porjectscontainer,
  Stackscontainer,
  Certificates,
  StyledFooter,
} from "./styles";
import star from "../../assets/videos/stars.gif";
import frontEnd from "../../assets/imgs/frontEnd.png";
import { projects } from "../../components/projectCard/projects";

function HomePage() {
  return (
    <>
      <Header />
      <AboutMe bgimage={star}>
        <div>
          <h4>Sobre Mim</h4>
          <p>
          Meu contato com tecnologia começou com jogos, por volta do ano de 2008, desde então essa vontade de conhecer a área só aumentou. Comecei a estudar por conta própria principalmente a parte de redes, em 2012 passei em uma escola de ensino médio e  técnico para o curso  de rede de computadores, que conclui em 2014.Por morar em uma pequena cidade metropolitana, a perpectiva tecnologica não tinha tanto crescimento, assim, foquei meus estudos na área da engenharia. Com o passar dos dias, percebi que meu desejo maior sempre foi trabalhar e estudar a aréa da tecnologia. Assim, comecei a fazer Ciência da computação, curso que me fez compreender muito sobre o que verdadeiramente gosto de fazer. Atualmente venho levantado estudos e práticas nos vieses da programação. Empenho-me para conseguir entregar o melhor, pois essa área representa o futuro, as inovaçoes que misturadas com novas perspectivas de vida, oferecem uma maior qualidade de vida, pois conforme a tecnologia avança a sociedade colhe os frutos dessa evolução tanto em informações, aprendizado, otimização de algum serviço, segurança e outros fatores. Tenho como meta profissional contribuir para a proliferação desses avanços da melhor forma.  
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
          Made by @MJTSJ
        </a>
      </StyledFooter>
    </>
  );
}
export default HomePage;
