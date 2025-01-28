"use client";
import React from "react";
import { Form, Input, Button, Typography, Checkbox } from "antd";
import styles from "./ForgetForm.module.scss";
import { ArrowRightOutlined } from "@ant-design/icons";
import { GoogleOutlined, AppleOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Title } = Typography;

const ForgetForm = () => {
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
          <h2 style={{ marginBottom: "10px" }}>Forgot Password</h2>
          <p style={{marginBottom:"30px"}}>Lorem ipsum dolor sit amet consectetur. </p>
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

         
        

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className={styles.submitButton}
              >
                Submit
                <div className={styles.arrowBtn}>
                  <ArrowRightOutlined />
                </div>
              </Button>
            </Form.Item>
          </Form>
          <div className={styles.orSignIn}>Have an account?   <Link href="/login">Login</Link></div>
        </div>
      </div>
    </div>
  );
};

export default ForgetForm;
