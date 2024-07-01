import React from "react";
import projectsData from "./projects";
import { NavLink } from "react-router-dom";
import { GoEye } from "react-icons/go";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <>
      {" "}
      <div className=" flex justify-center bg-red-200 p-7" id="projects">
        <div className="w-[85vw] flex flex-col gap-4">
          <h1 className="font-mono text-3xl mb-4">Projects</h1>

          <div className="flex flex-col pb-5  justify-center items-center">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-5   grid-cols-1">
              {projectsData.map((ele, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:w-[250px] w-[100%]  items-center   gap-5 bg-red-100 rounded-md p-6"
                  >
                    <div className="sm:w-[250px] sm:h-[250px] w-[100%]">
                      <NavLink
                        to={ele.link ? ele.link : ele.git}
                        target="_blank"
                      >
                        <img
                          src={ele.image}
                          alt={ele.name}
                          className="w-[100%] h-[100%] object-fill hover:animate-pulse"
                        />
                      </NavLink>
                    </div>

                    <div className="flex flex-col gap-4">
                      <h1 className="font-mono text-2xl ">{ele.name}</h1>
                      <p className="text-justify">{ele.description}</p>

                      <div className="flex gap-5 items-center">
                        {ele.link && (
                          <NavLink
                            className={"hover:text-red-400"}
                            to={ele.link}
                            target="_blank"
                          >
                            <GoEye size={20} className="hover:text-red-400" />
                          </NavLink>
                        )}

                        {ele.git && (
                          <NavLink
                            className={"hover:text-red-400"}
                            to={ele.git}
                            target="_blank"
                          >
                            <BsGithub
                              size={20}
                              className="hover:text-red-400"
                            />
                          </NavLink>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
