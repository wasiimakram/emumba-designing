import React from "react";
import { Button, Col, Layout, Row, Typography } from "antd";
import SingleWork from "./SingleWork";
import Testimonial from "./SingleTestimonial";

const { Title, Text } = Typography;
const { Content } = Layout;

const Clients: React.FC = () => {
  return (
    <Content className="clients-wrap">
      <Content className="ant-container">
        <Text className="title">What my clients say</Text>
        <Row>
          <Testimonial />
        </Row>
      </Content>
    </Content>
  );
};
export default Clients;
