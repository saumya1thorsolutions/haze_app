import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import HomesMain from "../components/homes/HomesMain";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <main id="main_section">
        <Header />
        <section className="wrapper_section">
          <Sidebar />
          {children}
        </section>
      </main>
    </>
  );
};

export default DefaultLayout;
