import React, { useState } from "react";
import SkillChart from "./SkillChart";
import chartData from "./chartData";
import skillsData from "./skills";

const Skills = () => {
  const [data, setData] = useState({
    labels: chartData.map((data) => data.name),
    datasets: [
      {
        label: "Skills",
        data: chartData.map((data) => data.level),
      },
    ],
  });
  return (
    <>
      <div className=" flex justify-center bg-red-100 p-7" id="skills">
        <div className="w-[80vw] flex flex-col gap-4">
          <h1 className="font-mono text-3xl mb-4">Skills</h1>

          {/* skills */}
          <div className="grid pb-5 md:grid-cols-4 grid-cols-2   gap-5">
            {skillsData.map((ele, idx) => {
              const Icon = ele.icon;
              return (
                <div
                  key={idx}
                  className=" cursor-pointer hover:bg-red-50 flex flex-col gap-4 items-center  bg-red-200 p-5 rounded-md"
                >
                  <h1>{ele.name}</h1>
                  <p>
                    <Icon size={30} />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <SkillChart chartData={data} />
    </>
  );
};

export default Skills;
