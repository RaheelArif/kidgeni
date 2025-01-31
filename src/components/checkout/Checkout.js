// pages/checkout.js
"use client";
import React, { useState } from 'react';
import { Row, Col, Form, Input, Select, Divider } from 'antd';
import styles from './Checkout.module.scss';
import BlackButton from '@/components/ui/BlackButton';
import { FaCreditCard, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const { Option } = Select;

const CheckoutPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Checkout Form Values:', values);
  };

  return (
    <div className={styles.checkoutContainer}>
      <Row gutter={[24, 24]}>
        {/* Left Side - Checkout Form */}
        <Col xs={24} md={14}>
          <div className={styles.checkoutFormSection}>
            <h2 className={styles.sectionTitle}>
              <FaUser /> Billing Details
            </h2>
            <Form 
              form={form} 
              layout="vertical" 
              onFinish={handleSubmit}
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                  >
                    <Input placeholder="Enter first name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[{ required: true, message: 'Please input your last name!' }]}
                  >
                    <Input placeholder="Enter last name" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
              >
                <Input placeholder="Enter email address" />
              </Form.Item>

              <Form.Item
                name="address"
                label="Shipping Address"
                rules={[{ required: true, message: 'Please input your address!' }]}
              >
                <Input.TextArea 
                  rows={3} 
                  placeholder="Enter your full shipping address" 
                />
              </Form.Item>

              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="country"
                    label="Country"
                    rules={[{ required: true, message: 'Please select your country!' }]}
                  >
                    <Select placeholder="Select your country">
                      <Option value="us">United States</Option>
                      <Option value="ca">Canada</Option>
                      <Option value="uk">United Kingdom</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="zipCode"
                    label="Zip Code"
                    rules={[{ required: true, message: 'Please input your zip code!' }]}
                  >
                    <Input placeholder="Enter zip code" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>

        {/* Right Side - Order Summary */}
        <Col xs={24} md={10}>
          <div className={styles.orderSummarySection}>
            <h2 className={styles.sectionTitle}>
              <FaCreditCard /> Order Summary
            </h2>
            
            <div className={styles.orderItems}>
              <div className={styles.orderItem}>
                <span>Product Name</span>
                <span>$29.99</span>
              </div>
              <div className={styles.orderItem}>
                <span>Shipping</span>
                <span>$5.99</span>
              </div>
              <Divider />
              <div className={styles.orderTotal}>
                <strong>Total</strong>
                <strong>$35.98</strong>
              </div>
            </div>

            <BlackButton 
              text="Complete Order" 
              className={styles.completeOrderBtn}
              onClick={() => form.submit()}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;