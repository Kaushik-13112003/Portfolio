import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main className="flex ">
          <Navbar />

          <div className="flex-grow  h-[100vh]">
            <div className="">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
