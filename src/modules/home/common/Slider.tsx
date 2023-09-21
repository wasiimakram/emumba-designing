import { Col, Image, Layout, Row, Typography } from "antd";
import React from "react";
import CommonButton from "../../../components/common/Button";

const { Title, Text } = Typography;
const { Content } = Layout;

const Slider: React.FC = () => {
  return (
    <Content className="slider">
      <Row className="ant-container">
        <Col lg={12} md={12} sm={24} className="left-sec">
          <Title level={2}>
            Create your website <span>in less than 12days</span>
          </Title>
          <Text className="description">
            Hey, I’m Mark Essein. A fullstack web developer with 7 years
            experience building successful websites and applications. I can
            build a high converting website for you as quick as possible!
          </Text>
          <CommonButton />
        </Col>
        <Col lg={12} md={12} sm={24} className="right-sec">
          <img className="user-face" src="assets/images/slide-img.png" />
          <Content className="circle"></Content>
        </Col>
      </Row>
    </Content>
  );
};
export default Slider;
