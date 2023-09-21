import { Col, Image, Layout, Row, Typography } from "antd";
import React from "react";
import CommonButton from "../../../components/common/Button";

const { Title, Text } = Typography;
const { Content } = Layout;

const About: React.FC = () => {
  return (
    <Content className="about-wrap">
      <Row className="ant-container">
        <Col lg={12} md={12} sm={24} className="left-sec">
          <img src="assets/images/about-group.png" />
        </Col>
        <Col lg={12} md={12} sm={24} className="right-sec">
          <Text className="title">About Me</Text>
          <Text className="description">
            My passion for building websites started since 2013 and since then i
            have helped companies around the world build amazing websites and
            products that create real value for the business and users.
            <br />
            <br />I enjoy solving problems with clean scalable solutions and I
            also have a genuine passion for inspiring design.
            <br />
            <br /> I am a fullstack developer focusing on core frontend and
            backend technologies which include HTML, CSS, Javascript, React and
            other core languages
          </Text>
        </Col>
      </Row>
    </Content>
  );
};
export default About;
