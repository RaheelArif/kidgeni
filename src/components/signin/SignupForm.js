"use client";
import React from "react";
import { Form, Input, Button, Typography, Checkbox } from "antd";
import styles from "./SignupForm.module.scss";
import { ArrowRightOutlined } from "@ant-design/icons";
import { GoogleOutlined, AppleOutlined } from "@ant-design/icons";
import Image from "next/image";
import appleImg from "/public/icons/ri_apple-fill.png";
import googleImg from "/public/icons/flat-color-icons_google.png";

const { Title } = Typography;

const SignupForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.signupFormContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.formWrapper2}>
          <h2 style={{ marginBottom: "20px" }}>Welcome Back</h2>
          <Form
            name="signup_form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            className={styles.signupForm}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                placeholder="Email"
                size="large"
                className={styles.inputField}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              style={{ marginBottom: "0px" }}
            >
              <Input.Password
                placeholder="Password"
                size="large"
                className={styles.inputField}
              />
            </Form.Item>
            <Form.Item
              name="terms"
              valuePropName="checked"
              style={{ margin: "10px 0px" }}
            >
              <Checkbox>
                <Typography.Text>
                  Lorem ipsum dolor sit amet consectetur.
                </Typography.Text>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className={styles.submitButton}
              >
                Sign in
                <div className={styles.arrowBtn}>
                  <ArrowRightOutlined />
                </div>
              </Button>
            </Form.Item>
          </Form>
          <div className={styles.orSignIn}>
            Or Sign In with
            <div className={styles.socialButtons}>
            <Button
                size="large"
                icon={<Image src={googleImg} alt="" />}
                className={styles.socialButton}
                >
                Google
              </Button>
              <Button
                size="large"
                icon={<Image src={appleImg} alt="" />}
                className={styles.socialButton}
              >
                Apple
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
