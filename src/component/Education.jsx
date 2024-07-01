import React from "react";
import { MdCastForEducation } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div className=" flex justify-center bg-red-200 p-7" id="education">
        <div className="w-[80vw] flex flex-col gap-4">
          <h1 className="font-mono text-3xl mb-4">Education</h1>
          <VerticalTimeline className="jumbotron mt-3">
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{
                background: "bg-info",
                color: "text-info",
              }}
              date="2021 - 2024"
              iconStyle={{ background: "rgb(232, 164, 164)", color: "#fff" }}
              icon={<MdCastForEducation />}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor's in Information & Technology
              </h3>
              <p className="vertical-timeline-element-subtitle">
                L.D.COLLEGE OF ENGINEERING
              </p>
              <h3 className="vertical-timeline-element-title">
                2024 - Pursuing
              </h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "bg-info",
                color: "text-info",
              }}
              date="2020 - 2021"
              iconStyle={{ background: "rgb(232, 164, 164)", color: "#fff" }}
              icon={<MdCastForEducation />}
            >
              <h3 className="vertical-timeline-element-title">HSC</h3>
              <p>TAXASHILA SCHOOL</p>

              <h3 className="vertical-timeline-element-title">
                Percentage - 95.16
              </h3>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;
