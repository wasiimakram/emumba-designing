import React from "react";
import { Button, Col, Layout, Row, Typography } from "antd";
import SingleWork from "./SingleWork";

const { Title, Text } = Typography;
const { Content } = Layout;
type DataType = {
  name: string;
  designation: string;
  image: string;
  description: string;
};
const data: DataType[] = [
  {
    name: "Charles Dim",
    designation: "Lead Designer, Netflix",
    image: "test-1.png",
    description: "",
  },
  {
    name: "Margeret Wills",
    designation: "CEO, Ebay",
    image: "test-2.png",
    description: "",
  },
];
const Testimonial: React.FC = () => {
  return (
    <>
      {data.map((item: DataType) => (
        <Col lg={11} md={11} sm={24}>
          <Content className="header">
            <Content className="left-sec">
              <img src={`assets/images/${item.image}`} />
              <Content className="name">
                <Title level={5}>{item.name}</Title>
                <Text>{item.designation}</Text>
              </Content>
            </Content>
            <Content className="right-sec">
              <img src="assets/images/quote.png" />
            </Content>
          </Content>
          <Content className="description">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt in malesuada tristique arcu non eu lectus orci. Amet
              non, sed eget ultrices cursus diam orci. Risus sed tristique
              lectus fusce lacus.
            </Text>
          </Content>
        </Col>
      ))}
    </>
  );
};
export default Testimonial;
