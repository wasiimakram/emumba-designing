import React from "react";
import { Button, Col, Layout, Row, Typography } from "antd";
import SingleWork from "./SingleWork";

const { Title, Text } = Typography;
const { Content } = Layout;

const Work: React.FC = () => {
  return (
    <Content className="work-wrap">
      <Content className="ant-container">
        <Text className="title">My Recent Works</Text>
        <Row>
          <SingleWork />
        </Row>
        <Button>See More</Button>
      </Content>
    </Content>
  );
};
export default Work;
