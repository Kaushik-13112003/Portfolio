import React from "react";
import About from "./About";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="h-auto bg-red-200" id="home">
        <div className="flex  justify-end items-center p-4 gap-4">
          <Fade>
            <NavLink
              to={
                "https://www.linkedin.com/in/kaushik-prajapati-0a258b27a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              target="_blank"
            >
              <FaLinkedin
                size={30}
                className="hover:text-red-400 hover:animate-pulse "
              />
            </NavLink>
            <NavLink to={"https://github.com/Kaushik-13112003"} target="_blank">
              <BsGithub
                size={30}
                className="hover:text-red-400 hover:animate-pulse "
              />
            </NavLink>

            <NavLink
              to={
                "https://www.instagram.com/_kaushikprajapati?igsh=MXFrY3Q5dDlicGNreg=="
              }
              target="_blank"
            >
              <BsInstagram
                size={30}
                className="hover:text-red-400 hover:animate-pulse "
              />
            </NavLink>
          </Fade>
        </div>
        <div className="p-6  flex   justify-center lg:flex-row flex-col gap-2 items-center">
          <div className=" lg:w-[40%] sm:items-baseline items-center p-5 flex flex-col gap-5 w-[100%]  lg:order-1 order-2">
            <p>Hi There, I'm </p>
            <p className="sm:text-4xl text-2xl -mt-4">
              <Typewriter
                options={{
                  strings: [
                    "Kaushik Prajapati",
                    "Mern Stack Developer!",
                    "Python Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>

            <div>
              <a href="Kaushik's Resume.pdf" download>
                <button className="bg-red-50 rounded-lg p-3 hover:bg-red-100">
                  Resume
                </button>
              </a>
            </div>
          </div>

          <div className=" lg:order-2 order-1 p-9">
            <Fade duration={2000}>
              <img
                src="profile.jpg"
                alt="kaushik prajapati"
                className="sm:w-[300px] rounded-full  w-[100%]"
              />
            </Fade>
          </div>
        </div>
      </div>

      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
