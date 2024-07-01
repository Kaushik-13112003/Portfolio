import React from "react";

const About = () => {
  return (
    <>
      <div className=" flex justify-center bg-red-100 p-7" id="about">
        <div className="w-[80vw] flex flex-col gap-4">
          <h1 className="font-mono text-3xl mb-4">About Me</h1>
          <p className=" text-justify">
            {" "}
            Hi, I'm Kaushik Prajapati, a passionate and dedicated individual
            eager to dive into the fields of Data Analysis and MERN Stack
            Development. As a fresher, I am enthusiastic about leveraging my
            skills and knowledge to contribute to innovative projects and
            continuous learning.
          </p>

          <p className=" text-justify">
            {" "}
            My journey began with a keen interest in understanding data and its
            potential to drive decision-making. This curiosity led me to explore
            various tools and techniques in data analysis. Simultaneously, my
            fascination with web development steered me towards mastering the
            MERN stack, a powerful combination for building dynamic and robust
            web applications.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
