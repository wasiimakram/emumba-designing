import React from "react";
import { Button, Col, Input, Layout, Row, Typography } from "antd";
import CommonButton from "../../../components/common/Button";

const { TextArea } = Input;

const { Title, Text } = Typography;
const { Content } = Layout;

const Contact: React.FC = () => {
  return (
    <Content className="contact-wrap">
      <Content className="ant-container">
        <Text className="title">Tell me about your project</Text>
        <Row>
          <Col span={12}>
            <Input placeholder="Name" className="inputs" />
          </Col>
          <Col span={12}>
            <Input placeholder="Email" className="inputs" />
          </Col>
          <Col span={24}>
            <TextArea
              rows={6}
              placeholder="Message"
              maxLength={6}
              className="inputs"
            />
          </Col>
        </Row>
        <CommonButton title="Send" />
      </Content>
    </Content>
  );
};
export default Contact;
