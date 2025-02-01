"use client";
import React from "react";
import { Layout, Menu, theme } from "antd";
import {
  UserOutlined,
  ClockCircleOutlined,
  HistoryOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";
import { LuBox } from "react-icons/lu";
import styles from "./layout.module.scss";

const { Sider } = Layout;

const menuItems = [
  {
    key: "/profile",
    icon: <UserOutlined />,
    label: "Profile",
  },
  {
    key: "/usage",
    icon: <ClockCircleOutlined />,
    label: "Usage Tracking",
  },
  {
    key: "/3d-printing",
    icon: <LuBox />,
    label: "3D Printing Videos",
  },
  {
    key: "/order-history",
    icon: <HistoryOutlined />,
    label: "Order History",
  },
  {
    key: "/subscription",
    icon: <DollarCircleOutlined />,
    label: "Subscription",
  },
];

const App = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();
  const pathname = usePathname();

  const handleMenuClick = (e) => {
    router.push(e.key);
  };

  return (

      <Layout className="my-slider">
        <Sider
          width={300}
          style={{
            background: "transparent",
          }}
          
        >
          <Menu
            mode="inline"
            selectedKeys={[pathname]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={menuItems.map((item) => ({
              key: item.key,
              icon: (
                <span
                  className={`${styles.menuIcon} ${
                    pathname === item.key ? styles.activeIcon : ""
                  }`}
                >
                  {item.icon}
                </span>
              ),
              label: (
                <span
                  className={`${styles.menuItem} ${
                    pathname === item.key ? styles.active : ""
                  }`}
                >
                  {item.label}
                </span>
              ),
            }))}
            onClick={handleMenuClick}
            className={styles.menu}
          />
        </Sider>
        <Layout
         className={styles.contentArea}
        >
          {children}
        </Layout>
      </Layout>
 
  );
};

export default App;
