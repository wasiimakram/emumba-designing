import { Col, Image, Layout, Row, Typography } from "antd";
import React from "react";
import CommonButton from "../../../components/common/Button";

const { Title, Text } = Typography;
const { Content } = Layout;

const Company: React.FC = () => {
  return (
    <Content className="company-wrap">
      <Content className="ant-container">
        <Text className="title">Companise I have worked for</Text>
        <Content className="logo-wrap">
          <img src="assets/images/google.png" />
          <img src="assets/images/bolt.png" />
          <img src="assets/images/amazon.png" />
          <img src="assets/images/paypal.png" />
          <img src="assets/images/netflix.png" />
        </Content>
      </Content>
    </Content>
  );
};
export default Company;
