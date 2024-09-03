import './App.css'
import Header from "./components/header.jsx";
import CardProject from "./components/card-project.jsx";
import Title from "./components/title.jsx";
import { useLoaderData } from 'react-router-dom'
import CardSkills from "./components/card-skills.jsx";
import ContactForm from "./components/formulaire-de-contact.jsx";

function Home() {
    const { projects, skills} = useLoaderData()

  return (
      <div>
          <Header/>
          <section id="mes-projets" className="flex flex-col items-center h-auto" >
              <Title>Mes projets</Title>
              <section
                  className="grid grid-cols-1 gap-8 md:gap-15 p-6 pb-16  md:grid-cols-2 lg:grid-cols-3  w-[100%] md:w-[90%]" >
                  {projects .map((project) => (
                      <CardProject
                          key={project.id}
                          id={project.id}
                          title={project.title}
                          description={project.description}
                          pictures={project.pictures}
                          imageUrl={project.image}
                          siteUrl={project.urlSite}
                          codeUrl={project.urlCode}
                          logo={project.logo}
                      />
                  ))}
              </section>
          </section>
          <section id="mes-compétences">
              <div className="flex flex-col items-center  h-auto bg-[#2b3144]">
                  <Title style={{color: 'white'}}>Mes compétences</Title>

                  <section className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 text-sm md:text-md md:px-8 md:pb-8 sm:mb-8 sm:gap-8 gap-0 md:gap-5 lg:gap-16">
                      {skills &&
                          skills.map((skillCategory) => (
                              <CardSkills
                                  key={skillCategory.id}
                                  title={skillCategory.title}
                                  skillCategory={skillCategory.skillCategory}
                              />
                          ))}
                  </section>
              </div>
          </section>
          <section id="a-propos" className="bg-[#F5F5F5] xl:flex relative overflow-hidden flex justify-center items-center text-[#2b3144]">
              <div className="w-[100%] xl:w-1/2 md:px-10  z-10">
                  <Title>A propos de moi</Title>
                  <div className="parallax-background bg-cover bg-fixed"></div>
                  <p className=" text-sm md:text-lg md:pb-16 pb-12 md:pt-6 px-10 text-justify">
                      Après plusieurs années d'exercice en tant qu'infirmière, je m'oriente désormais
                      vers une nouvelle expérience professionnelle qui me passionne depuis toujours :
                      le développement web.<br/> <br/>
                      Dans cette nouvelle aventure, je mettrai à profit non seulement les compétences
                      acquises dans le travail collaboratif, l'organisation et la communication, mais aussi
                      la possibilité d'exprimer ma créativité et ma capacité à résoudre des problèmes
                      à travers mes réalisations. <br/> <br/>
                      Mon parcours atypique apportera une valeur ajoutée à chaque projet que j'entreprendrai.<br/><br/>
                      Bienvenue dans mon univers où s'exprime ma créativité.
                  </p>
              </div>
          </section>
          <section  id="contact" className="flex flex-col bg-[#2b3144] items-center text=[#efeff1] pb-10 justify-center">
              <Title style={{color: 'white'}}>Me contacter</Title>
              <p className="text-white text-sm md:text-lg lg:text-xl pb-10">N'hésitez pas à me contacter via ce formulaire</p>
              <ContactForm/>
          </section>
      </div>
  )
}
export default Home
