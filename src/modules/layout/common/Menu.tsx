import { Button, Menu, MenuProps } from "antd";
import React from "react";
import CommonButton from "../../../components/common/Button";

const Menus: React.FC = () => {
  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "home",
    },
    {
      label: "About me",
      key: "about",
    },
    {
      label: "Works",
      key: "works",
    },
    {
      label: "Blog",
      key: "blog",
    },
    {
      label: <CommonButton />,
      key: "get",
    },
  ];
  return <Menu className="header-menu" mode="horizontal" items={items} />;
};
export default Menus;
