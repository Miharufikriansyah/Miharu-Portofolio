/* eslint-disable react/no-unescaped-entities */
import Card from "./Card"

const projects = [
    {
        id : 1,
        title : "Hellena",
        description : "Hellena Project is one of my task project at campus for Web Programming course. This project is a doctor consultation and medicine selling website.",
        img : './src/assets/img/hellena.jpg',
        tech : ['HTML','CSS','JS','Codeigniter'],
        github : 'https://github.com/Miharufikriansyah/Hellena'
    },
    {
        id : 2,
        title : "Lakeside Money Report",
        description : "Lakeside Money Report is web application made for Lakeside Coffee Shop. It contain the cashflow, money report input, and the input history. This project is my internship program in campus.",
        img : './src/assets/img/lakeside.jpg',
        tech : ['HTML','CSS','JS','Codeigniter'],
        github : 'https://github.com/Miharufikriansyah/Lakeside'
    },
    {
        id : 3,
        title : "Sword Blogger",
        description : "Sword Blogger is my personal blog project. This project has content about game called 'Pokemon Sword'. The content of the website are information article, guide, and many more.",
        img : './src/assets/img/sword-blog.jpg',
        tech : ['HTML','Bootstrap'],
        github : 'https://github.com/Miharufikriansyah/Sword-Blogger'
    }
]

export default function Project() {
    return (
        <section id="project" className="mb-20 pt-8">
      <div className="pt-8 w-full">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-xl text-white font-bold md:text-2xl lg:text-3xl">
            Recent Projects
          </h1>
          <p className="text-center text-[#C9C9C9] text-sm px-5 md:text-base">
            These are my Front End Project from task project, internship, and
            personal project
          </p>
          <div className="flex flex-wrap justify-center mt-4 gap-5">
            {projects.map((item)=> (
                <Card key={item.id} project={item}/>
            ))}
            
          </div>
        </div>
      </div>
    </section>
    )
}