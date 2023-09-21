import React from "react";
import { Layout, Typography } from "antd";
import "./layout.scss";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const Footer: React.FC = () => {
  return (
    <Content className="footer-wrap">
      <img className="logo" src="assets/images/logo.jpg" alt="" />
      <Text>Copyright 2023. All right reserved</Text>
      <Text className="connect">
        Connect with me:
        <span>
          <img src="assets/images/fb.png" />
          <img src="assets/images/twitter.png" />
          <img src="assets/images/git.png" />
        </span>
      </Text>
    </Content>
  );
};
export default Footer;
