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
                  className="grid grid-cols-1 gap-8 md:gap-16 p-6 pb-16  sm:grid-cols-2 lg:grid-cols-3  w-[100%] md:w-[80%]" >
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
                      />
                  ))}
              </section>
          </section>
          <section id="mes-compétences">
              <div className="flex flex-col items-center  h-auto bg-[#2b3144]">
                  <Title style={{color: 'white'}}>Mes compétences</Title>

                  <section className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 text-md ">
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
          <section id="a-propos" className="bg-[#F5F5F5] xl:flex relative flex justify-center items-center text-[#2b3144]">
              <div className="xl:w-1/2  px-10 md:px-10  w-[100%] z-10">
                  <Title>A propos de moi</Title>
                  <img
                      className="l:w-1/2 xl:block hidden absolute top-0 left-0 h-[30%] z-0  "
                      src={'./images/photo3.jpg'}
                      alt="image d'ordinateur + une plante"
                  />

                  <p className=" text-l md:text-xl md:pb-16 pb-12 md:px-5 text-left">
                      Après une carrière d'infirmière qui a forgé mes compétences de travail en équipe,
                      de communication et d'organisation, ma passion inébranlable pour la technologie m'a
                      conduite vers le développement web. Aujourd'hui, je mets à profit mon expérience diversifiée
                      pour créer des solutions alliant fonctionnalité et convivialité.
                      <br/>
                      <br/>
                      Mon parcours atypique enrichit ma perspective, apportant une valeur unique à chaque projet.
                      Bienvenue dans mon univers où ma créativité technologique prend vie.
                  </p>
              </div>

              <img
                  className="  l:w-1/2 xl:block hidden absolute top-0 right-0 h-[100%] z-0 "
                  src={'images/photo.jpg'}
                  alt="image d'ordinateur + une plante"
              />
          </section>
          <section  id="contact" className="flex flex-col bg-[#2b3144] items-center text=[#efeff1] pb-10 justify-center">

              <Title style={{color: 'white'}}>Me contacter</Title>
              <p className="text-white pb-10">N'hésitez pas à me contacter via ce formulaire</p>
              <ContactForm/>
          </section>
      </div>
  )
}
export default Home
