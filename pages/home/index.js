import React from "react";
import OurServices from "./our_services";
import MainLayout from "../../components/layouts/main_layout";
import HomeTopContent from "./top_content";

function Home() {
  return (
    <MainLayout>
      <HomeTopContent />
      <OurServices />
    </MainLayout>
  );
}

export default Home;
