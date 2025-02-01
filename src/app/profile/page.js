"use client";
import WebLayout from "@/components/layout/WebLayout";
import React from "react";
import style from "./profile.module.scss";
import { Button, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import dummyCat from "/public/images/dummyCat.png";
import Image from "next/image";
import BlackButton from "@/components/ui/BlackButton";
import { PiArrowRight } from "react-icons/pi";

const ProfilePage = () => {
  return (
    <WebLayout>
      <h1 className={style.profileTitle}>Alena Ekstrom</h1>
      <div className={style.profileContainer}>
        <div className={style.profileImageContainer}>
          <Image src={dummyCat} alt="Profile" className={style.profileImage} />
          <div className={style.editIcon}>
            <EditOutlined />
          </div>
        </div>
        <div className={style.profileForm}>
          <div className={style.formGroup}>
            <label htmlFor="name">Name</label>
            <Input
              size="large"
              id="name"
              placeholder="Alena Ekstrom"
              className={style.inputField}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="email">Email</label>
            <Input
              size="large"
              id="email"
              placeholder="alenaekstrom@gmail.com"
              className={style.inputField}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="password">Password</label>
            <Input.Password
              size="large"
              id="password"
              placeholder="**********"
              className={style.inputField}
            />
          </div>
          <div className={style.saveButtonContainer}>
            <div  style={{width:"100px"}}>
              <BlackButton
              paddingRight={"50px"}
                text="Save"
                icon={<PiArrowRight />}
                size="large"
                shape="round"
                // onClick={handleButtonClick}
                className="additional-class"
                iconStyle={{ color: "white", marginLeft: "5px" }} // Custom icon styles
                buttonStyle={{ backgroundColor: "blue" }} // Custom button styles
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default ProfilePage;
