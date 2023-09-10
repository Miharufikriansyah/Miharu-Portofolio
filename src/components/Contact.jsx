import ContactForm from "./ContactForm"

export default function Contact() {
    return (
        <section id="contact" className="mb-10 pt-8">
      <div className="w-full mt-6">
        <div className="flex flex-col justify-center items-center gap-6">
          <h2 className="text-tertiary font-semibold text-xl md:text-2xl lg:text-3xl">
            Contact Me
          </h2>
          <div
            className="flex flex-col items-center bg-white p-4 rounded-xl gap-3 w-80 md:w-1/2 lg:w-2/3"
          >
            <p className="text-sm text-primary md:text-lg lg:text-xl">Hire me for your AWESOME project</p>
            <ContactForm/>
          </div>
          <h1
            className="text-white text-xl font-bold tracking-wider md:text-2xl lg:text-3xl"
          >
            GET IN TOUCH WITH ME
          </h1>
          <div className="flex w-full justify-evenly mt-3 max-w-xl">
            <a href="">
              <img className="w-5 md:w-8" src="./src/assets/img/gmail.png" alt="gmail" />
            </a>
            <a href="">
              <img
                className="w-5 md:w-8"
                src="./src/assets/img/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a href="">
              <img
                className="w-5 md:w-8"
                src="./src/assets/img/github.png"
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    )
}