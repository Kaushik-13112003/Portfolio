import React from "react";
import Layout from "./component/Layout";
import Home from "./component/Home";
import ScrollToTop from "react-scroll-to-top";
const App = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>

      <ScrollToTop
        smooth
        className="flex items-center justify-center"
        // color="white"
        style={{
          borderRadius: "100px",
          backgroundColor: " rgb(283, 214, 214)",
        }}
      />
    </>
  );
};

export default App;
