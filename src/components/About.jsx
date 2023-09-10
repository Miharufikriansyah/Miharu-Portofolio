import CodeLogo from "./CodeLogo"
import {BsStarFill} from 'react-icons/bs'

export default function About() {
    const programLang = [
        {
            id : 1,
            tech : "HTML",
            desc : Array(4).fill().map((_,index)=> (<BsStarFill key={index}/>)),
            src : "./public/img/html-logo.png",
        },
        {
            id : 2,
            tech : "CSS",
            desc : Array(4).fill().map((_,index)=> (<BsStarFill key={index}/>)),
            src : "./public/img/css-logo.png",
        },
        {
            id : 3,
            tech : "JavaScript",
            desc : Array(3).fill().map((_,index)=> (<BsStarFill key={index}/>)),
            src : "./public/img/js-logo.png",
        },
        {
            id : 4,
            tech : "Tailwind",
            desc : Array(4).fill().map((_,index)=> (<BsStarFill key={index}/>)),
            src : "./public/img/tailwind-logo.png",
        },
        {
            id : 5,
            tech : "Bootstrap",
            desc : Array(3).fill().map((_,index)=> (<BsStarFill key={index}/>)),
            src : "./public/img/bootstrap-logo.png",
        },
        {
            id : 6,
            tech : "Codeigniter",
            desc : Array(3).fill().map((_,index)=> (<BsStarFill key={index}/>)),
            src : "./public/img/codeigniter-logo.png"
        },
        {
            id : 7,
            tech : "React JS",
            desc : Array(2).fill().map((_,index)=> (<BsStarFill key={index}/>)),
            src : "./public/img/react-logo.png"
        }
    ]


    return (
        <section id="about" className="bg-white pt-8">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center p-2 gap-3">
          <h2
            className="text-primary text-xl font-bold mt-4 md:text-2xl lg:text-3xl"
          >
            About Me
          </h2>
          <p
            className="text-center text-primary text-sm my-2 max-w-xl px-3 md:text-base"
          >
            As an Front End Developer, I have work in several projects,
            internship and training. Concurrently prioritizing my studies, I am
            committed to enhancing my Front End proficiencies through a series
            of projects that challenge my abilities
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 mt-6">
          <h1
            className="text-primary text-center px-2 text-xl font-bold md:text-2xl lg:text-3xl"
          >
            What I Use For Programming
          </h1>
          <div
            className=" w-full flex flex-wrap mb-7 justify-center items-center gap-7 lg:w-[600px]"
          >
            {programLang.map((lang) => (
                <CodeLogo key={lang.id} tech={lang.tech} desc={lang.desc} imageName={lang.src}/>
            ))}
          </div>
        </div>
      </div>
    </section>
    )
}