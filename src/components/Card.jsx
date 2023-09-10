/* eslint-disable react/prop-types */
import Button from "./Button"

export default function Card({project}) {

  function handleGithubClick() {
    window.open(project.github, '_blank')
  }

    return (
        <div key={project.id} className="flex flex-col items-center w-72 bg-white gap-3 h-96 rounded-lg overflow-hidden group">
              <div className="w-full h-36 overflow-hidden relative">
                <div
                style={{backgroundImage: `url(${project.img})` }}
                  className="w-full h-full bg-cover bg-center absolute group-hover:scale-110 transition-all duration-300" 
                ></div>
              </div>
              <h3 className="text-xl text-primary font-bold">
                {project.title}
              </h3>
              <p className="text-xs text-center align-bottom px-3 text-primary h-24">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-evenly items-center w-60">
                {project.tech.map((item) => (
                  <p key={item} className="text-primary font-semibold text-sm">{item}</p>
                ))}
                </div>
              <Button name={"Github"} handleClick={handleGithubClick}/>
            </div>
    )
}