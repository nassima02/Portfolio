import './App.css'
import Header from "./components/header.jsx";
import CardProject from "./components/card-project.jsx";
import Title from "./components/title.jsx";
import { useLoaderData } from 'react-router-dom'

function Home() {
    const { projects} = useLoaderData()
  return (
      <div>
          <Header/>
          <section className="flex flex-col items-center h-auto ">
                  <Title>Mes projets</Title>
                  <section className="gap-16 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  w-[75%] ">
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
      </div>
  )
}

export default Home
