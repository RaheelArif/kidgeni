"use client";
import React from "react";
import { Form, Input, Button, Typography } from "antd";
import styles from "./ContactForm.module.scss";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { TextArea } = Input;
const ContactForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.contactFormContainer}>
      <Title level={2} className={styles.contactFormTitle}>
        Say hi 👋 - We'd love to hear from you!
      </Title>
      <div className={styles.formWrapper}>
        <div className={styles.formWrapper2}>
          <Form
            name="contact_form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            className={styles.contactForm}
          >
            <Title level={5} className={styles.formTitle}>
              Message Us
            </Title>
            <Form.Item
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input
                placeholder="First name"
                size="large"
                className={styles.inputField}
              />
            </Form.Item>

            <Form.Item
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input
                size="large"
                placeholder="Last name"
                className={styles.inputField}
              />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[
                { required: true, message: "Please input your message!" },
              ]}
            >
              <TextArea
                autoSize={{ minRows: 4, maxRows: 6 }}
                placeholder="Message"
                className={styles.textAreaField}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className={styles.submitButton}
              >
                Send Message{" "}
                <div className={styles.arrowBtn}>
                  <ArrowRightOutlined />
                </div>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
