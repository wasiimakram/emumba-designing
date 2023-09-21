import React from "react";
import { Col, Layout, Row, Typography } from "antd";

const { Title, Text } = Typography;
const { Content } = Layout;

type DataType = {
  name: string;
  image: string;
  time: string;
};
const data: DataType[] = [
  {
    name: "Ecommerce Landing page",
    image: "work-6.png",
    time: "11 days",
  },
  {
    name: "Basketball Studio",
    image: "work-1.png",
    time: "9 days",
  },
  {
    name: "Health care site",
    image: "work-3.png",
    time: "11 days",
  },
  {
    name: "Perfume Company site",
    image: "work-2.png",
    time: "10 days",
  },
  {
    name: "Real Estate",
    image: "work-4.png",
    time: "12 days",
  },
  {
    name: "Bank Wallet",
    image: "work-5.png",
    time: "5 days",
  },
];

const SingleWork: React.FC = () => {
  return (
    <>
      {data.map((item: DataType) => (
        <Col lg={8} md={8} sm={24} className="work-sec">
          <Text>{item.name}</Text>
          <img src={`assets/images/${item.image}`} />
          <Content className="tag">{item.time}</Content>
        </Col>
      ))}
    </>
  );
};
export default SingleWork;
