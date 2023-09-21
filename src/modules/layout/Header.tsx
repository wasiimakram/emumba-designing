import { Button, Col, Layout, Menu, MenuProps, Row, Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import "./layout.scss";
import Menus from "./common/Menu";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const Navbar: React.FC = () => {
  const history = useHistory();

  return (
    <Header className="app-header">
      <Content className="ant-container">
        <Row>
          <Col span={8}>
            <Content
              className="logo"
              onClick={() => {
                history.push("/");
              }}
            >
              <img className="img-fluid" src="assets/images/logo.jpg" alt="" />
              <Title level={2} className="logo-text">
                MUMBA
              </Title>
            </Content>
          </Col>
          <Col className="menus" span={10} offset={6}>
            <Menus />
          </Col>
        </Row>
      </Content>
    </Header>
  );
};
export default Navbar;
