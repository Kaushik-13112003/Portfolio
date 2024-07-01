import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const router = useLocation();
  let currentPath = router.hash;
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <>
        <div className="z-30 ">
          <div
            className={`${
              !show ? "sm:w-[20vw] w-[35vw]" : "20px lg:h-[100vh] bg-red-50"
            } flex justify-end  fixed  z-20 p-2`}
          >
            {show ? (
              <MdKeyboardDoubleArrowRight
                size={30}
                onClick={() => handleShow()}
                className="cursor-pointer hover:text-red-400"
              />
            ) : (
              <MdKeyboardDoubleArrowLeft
                size={30}
                onClick={() => handleShow()}
                className="cursor-pointer hover:text-red-400"
              />
            )}
          </div>

          <div
            className={`flex flex-col navbar fixed h-screen  gap-4 p-4 bg-red-50  items-center  ${
              show ? " -left-full " : "sm:w-[20vw] w-[35vw] "
            }  `}
          >
            {/* actions */}
            <div className={`flex flex-col gap-3 mt-8  items-center`}>
              <a
                href={"#home"}
                className={`flex items-center justify-center sm:w-[120px] w-[100px] gap-2  hover:bg-red-100 p-2 rounded-lg ${
                  currentPath === "#home" ? "active" : ""
                }
            `}
                onClick={() => setShow(true)}
              >
                <p>Home </p>
              </a>

              <a
                href={"#about"}
                className={`flex items-center gap-2 justify-center sm:w-[120px] w-[100px]  hover:bg-red-100 p-2 rounded-lg  ${
                  currentPath === "#about" ? "active" : ""
                } `}
                onClick={() => setShow(true)}
              >
                <p>About </p>
              </a>

              <a
                href={"#education"}
                className={`flex items-center gap-2 justify-center sm:w-[120px] w-[100px]  hover:bg-red-100 p-2 rounded-lg }  ${
                  currentPath === "#education" ? "active" : ""
                } `}
                onClick={() => setShow(true)}
              >
                <p>Education </p>
              </a>

              <a
                href={"#skills"}
                className={`flex items-center gap-2 justify-center sm:w-[120px] w-[100px]  hover:bg-red-100 p-2 rounded-lg  ${
                  currentPath === "#skills" ? "active" : ""
                } `}
                onClick={() => setShow(true)}
              >
                <p>Skills </p>
              </a>

              <a
                href={"#projects"}
                className={`flex items-center gap-2 justify-center sm:w-[120px] w-[100px]  hover:bg-red-100 p-2 rounded-lg  ${
                  currentPath === "#projects" ? "active" : ""
                } `}
                onClick={() => setShow(true)}
              >
                <p>Projects </p>
              </a>

              <a
                href={"#contact"}
                className={`flex items-center gap-2 justify-center sm:w-[120px] w-[100px]  hover:bg-red-100 p-2 rounded-lg   ${
                  currentPath === "#contact" ? "active" : ""
                }`}
                onClick={() => setShow(true)}
              >
                <p>Contact </p>
              </a>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Navbar;
