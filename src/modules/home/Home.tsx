import "./home.scss";

import { Layout } from "antd";
import React from "react";
import Slider from "./common/Slider";
import About from "./common/About";
import Company from "./common/Company";
import Work from "./common/Work";
import Clients from "./common/Clients";
import Contact from "./common/Contact";

const { Content } = Layout;

const Home: React.FC = () => {
  return (
    <Layout className="home-main-wrap">
      <Slider />
      <About />
      <Company />
      <Work />
      <Clients />
      <Contact />
    </Layout>
  );
};
export default Home;
