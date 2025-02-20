"use client";
import React, { useState } from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";

const DropdownMenu = () => {
  const links = [
    { href: "/3d-printing", label: "3d-printing" },
    { href: "/checkout", label: "checkout" },
    { href: "/contact-us", label: "contact-us" },
    { href: "/explore", label: "explore" },
    { href: "/faq", label: "faq" },
    { href: "/forget-password", label: "forget-password" },
    { href: "/login", label: "login" },
    { href: "/order-confirmation", label: "order-confirmation" },
    { href: "/order-history", label: "order-history" },
    { href: "/privacy-policy", label: "privacy-policy" },
    { href: "/product-detail", label: "product-detail" },
    { href: "/profile", label: "profile" },
    { href: "/signup", label: "signup" },
    { href: "/subscription", label: "subscription" },
    { href: "/terms-of-use", label: "terms-of-use" },
    { href: "/usage", label: "usage" },
  ];

  const menu = (
    <Menu style={{height:"280px" , overflowY:"auto"}}>
      {links.map((link, index) => (
        <Menu.Item key={index}>
          <Link href={link.href} passHref>
            {link.label}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Pages <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default DropdownMenu;
