import React from "react";
import { Button } from "antd";
import "./index.scss";

type Props = {
  title?: string;
};
const CommonButton: React.FC<Props> = ({ title }) => {
  return (
    <Button className="common-button" type="primary">
      {title ? title : "Get in Touch"}
    </Button>
  );
};
export default CommonButton;
