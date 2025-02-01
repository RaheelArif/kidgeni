"use client";
import React from "react";
import { Form, Input, Typography, Row, Col } from "antd";
import styles from "./CheckoutForm.module.scss";
import { PiArrowRight } from "react-icons/pi";
import BlackButton from "../ui/BlackButton";
import dummyCat from "/public/images/dummyCat.png";
import CartItem from "../Header/CartItem";
const { Title } = Typography;

const CheckoutForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const cartItems = [
    {
      id: 1,
      title: "Lorem Ipsum Dolor sit Amet",
      price: 29.99,
      quantity: 2,
      image: dummyCat,
    },
    {
      id: 2,
      title: "Lorem Ipsum Dolor sit Amet",
      price: 19.99,
      quantity: 1,
      image: dummyCat,
    },
  ];
  return (
    <div className={styles.checkoutContainer}>
      <Row gutter={20}>
        <Col xs={24} md={24} lg={12}>
          <Title level={2} className={styles.checkoutTitle}>
            Checkout
          </Title>
          <div className={styles.checkoutFormWrapper}>
            <div className={styles.formSection}>
              <Title level={4} className={styles.sectionTitle}>
                Shipping Address
              </Title>
              <Form
                name="checkout_form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className={styles.checkoutForm}
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="First Name"
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your first name!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="First Name"
                        className={styles.inputField}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="Last Name"
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your last name!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Last Name"
                        className={styles.inputField}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  label="Address"
                  name="address"
                  rules={[
                    { required: true, message: "Please input your address!" },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Address"
                    className={styles.inputField}
                  />
                </Form.Item>

                <Row gutter={16}>
                  <Col xs={24} sm={8}>
                    <Form.Item
                      label="Country"
                      name="country"
                      rules={[
                        {
                          required: true,
                          message: "Please input your country!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Country"
                        className={styles.inputField}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Form.Item
                      label="State"
                      name="state"
                      rules={[
                        { required: true, message: "Please input your state!" },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="State"
                        className={styles.inputField}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Form.Item
                      label="Zip Code"
                      name="zipCode"
                      rules={[
                        {
                          required: true,
                          message: "Please input your zip code!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Zip Code"
                        className={styles.inputField}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
            <div className={`${styles.formSection} ${styles.adressSection}`}>
              <Title level={4} className={styles.sectionTitle}>
                Payment Method
              </Title>
              <Form
                name="payment_form"
                layout="vertical"
                className={styles.paymentForm}
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="Name Card"
                      name="nameCard"
                      rules={[
                        {
                          required: true,
                          message: "Please input name on card!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Name Card"
                        className={styles.inputField}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="Card Number"
                      name="cardNumber"
                      rules={[
                        {
                          required: true,
                          message: "Please input card number!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Card Number"
                        className={styles.inputField}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="Expire Date"
                      name="expireDate"
                      rules={[
                        {
                          required: true,
                          message: "Please input card expiration date!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="MM/YY"
                        className={styles.inputField}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="CVC/CVV"
                      name="cvc"
                      rules={[
                        {
                          required: true,
                          message: "Please input security code!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="CVC/CVV"
                        className={styles.inputField}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item>
                  <BlackButton
                    text="Continue  to Payment"
                    icon={<PiArrowRight />}
                    size="large"
                    shape="round"
                    // onClick={handleButtonClick}
                    className="additional-class"
                    iconStyle={{ color: "white", marginLeft: "5px" }} // Custom icon styles
                    buttonStyle={{ backgroundColor: "blue" }} // Custom button styles
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
        <Col xs={24} md={24} lg={12}>
          <Title level={4} className={styles.sectionTitle}>
            Your Order
          </Title>
          {cartItems?.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                borderBottom={true}
                bgFalse={true}
                key={item.id}
                item={item}
              />
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
          <div className={styles.inputFieldContainer}>
            <Input
              size="large"
              placeholder="Discount Code"
              className={styles.inputField}
            />
            <BlackButton
              text="Apply"
              icon={<PiArrowRight />}
              size="large"
              shape="round"
              isBlack={true}
              // onClick={handleButtonClick}
              className="additional-class"
              iconStyle={{ color: "white", marginLeft: "5px" }} // Custom icon styles
              buttonStyle={{ backgroundColor: "blue" }} // Custom button styles
            />
          </div>
          <div className={styles.priceContainer}>
            <p className={styles.priceText}>
              <span>Subtotal:</span> <b> $26.97</b>
            </p>
            <p className={styles.priceText}>
              <span>Vat:</span> <b> $26.97</b>
            </p>
            <p className={styles.priceText}>
              <span>Total:</span> <b> $26.97</b>
            </p>
          </div>
          {/* Right side content goes here (empty for now) */}
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutForm;
