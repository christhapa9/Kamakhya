import Head from "next/head";
import React from "react";
import Footer from "../templates/footer";
import Header from "../templates/header";

function MainLayout({ children }) {
  return (
    <div className="dark">
      <Head></Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
