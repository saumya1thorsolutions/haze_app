import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import HomesMain from "../components/homes/HomesMain";

const Home = () => {
  return (
    <>
      <main id="main_section">
        <Header />
        <section className="wrapper_section">
          <Sidebar />
          <HomesMain />
        </section>
      </main>
    </>
  );
};

export default Home;
