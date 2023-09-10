/* eslint-disable react/no-unescaped-entities */
import {TypeAnimation} from 'react-type-animation';
import Button from "./Button";

export default function Hero() {

  function handleCVClick() {
    window.open('https://drive.google.com/file/d/1B5N4Z3I0_2ImjlB2vo2Cxjt6CGXqwDit/view?usp=sharing', '_blank')
  }

    return (
        <section id="home" className="pt-14 mb-20 md:mb-28 md:pt-32">
      <div className="flex justify-center w-full">
        <div className=" container w-full flex flex-wrap justify-center px-10">
          <div className="w-full p-3 sm:w-1/2">
            <h2 className="text-tertiary text-lg font-bold mb-2 md:text-xl">
              Hi, I'm Miharu Idhan Fikriansyah
            </h2>
            <h1 className="text-xl text-white mb-3 font-bold min-h-[56px] md:text-3xl">
              A Junior <TypeAnimation sequence={[
              'Front End Developer',
              2000,
              'Software Engineer',
              1000,
              'Cyber Security',
              1000
            ]} repeat={Infinity} />
            </h1>
            <p className="text-sm text-[#C9C9C9]  mb-4">
              A beginner in Front End Development and Software Engineering.
              Currently enroll in Information Technology Study Program at Telkom
              University. Also having interest in Cyber Security.
            </p>
            <div className="flex gap-3 mb-10 w-full lg:w-1/2">
              <Button name={"Download CV"} handleClick={handleCVClick}/>
            </div>
          </div>
          <div className="w-full flex justify-center mb-8 sm:w-1/2">
            <div
              className="w-64 h-60 overflow-hidden rounded-xl ring-2 shadow-2xl shadow-primary animate-float lg:w-72 lg:h-64"
            >
              <img
                className="-translate-y-14 brightness-90 lg:-translate-y-20"
                src="/img/Miharu.jpg"
                alt="miharu"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}