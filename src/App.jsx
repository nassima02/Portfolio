import './App.css'
import Header from "./components/header.jsx";
import CardProject from "./components/card-project.jsx";
import Title from "./components/title.jsx";
import { useLoaderData } from 'react-router-dom'
import CardSkills from "./components/card-skills.jsx";
import PropTypes from 'prop-types';

function Home() {
    const { projects, skills} = useLoaderData()
  return (
      <div>
          <Header/>
          <section className="flex flex-col items-center h-auto ">
              <Title>Mes projets</Title>
              <section className="gap-8 md:gap-16 px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-[100%] md:w-[80%]">
                  {projects.map((project) => (
                      <CardProject
                          key={project.id}
                          id={project.id}
                          title={project.title}
                          description={project.description}
                          imageUrl={project.image}
                      />
                  ))}
              </section>
          </section>
          <section>
              <div className="flex flex-col items-center bg-[#2b3144] h-auto p-8 ">
                  <Title style={{color: 'white'}}>Mes compétences</Title>

                  <section className="grid grid-cols-3 text-lg gap-4">
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
          <section className="bg-[#F5F5F5] xl:flex relative flex justify-center items-center text-[#2b3144]">
              <div className="xl:w-1/2  px-8 md:px-8 max-w-[800px] w-[100%] z-10">
                  <Title>A propos de moi</Title>
                  <p className="text-xl p-10">
                      Fort d'une expérience de 12 ans en tant qu'infirmière
                      dévouée, j'ai décidé de m'engager dans un tout nouveau
                      chapitre de ma vie professionnelle en me convertissant
                      en développeuse web. Mon parcours dans le domaine de la
                      santé m'a permis de développer des compétences cruciales
                      en gestion du stress, en résolution de problèmes et en
                      communication, qualités que je compte désormais
                      appliquer dans le monde passionnant du développement
                      web.
                      <br/> Ce changement représente pour moi non seulement
                      une évolution professionnelle, mais aussi une
                      opportunité de fusionner ma passion pour la technologie
                      avec mon désir inné d'apprendre et de relever de
                      nouveaux défis.
                  </p>
              </div>

              <img
                  className="  l:w-1/2 xl:block hidden absolute top-0 right-0 h-[100%] z-0 "
                  src={'images/photo.jpg'}
                  alt="Votre description"
              />
          </section>
      </div>
  )
}
CardProject.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};
export default Home
