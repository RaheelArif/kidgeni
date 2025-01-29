"use client";
import React, { useState } from "react";
import styles from "./ProductDetail.module.scss";
import { Button, Row, Col, Collapse } from "antd";
import Image from "next/image";
import { FaCartPlus, FaShare } from "react-icons/fa";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import payCart1 from "/public/icons/payCart1.png";
import payCart2 from "/public/icons/payCart2.png";
import payCart3 from "/public/icons/payCart3.png";
import { CiCreditCard1 } from "react-icons/ci";

const { Panel } = Collapse;

const ProductDetail = () => {
  const [value, setValue] = useState(1);
  const [activeKey, setActiveKey] = useState(["0"]);

  const onChange = (key) => {
    setActiveKey(key);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };
  return (
    <div className={styles.productDetailContainer}>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={12}>
          <div className={styles.productLeft}>
            {/* Placeholder for the left side content, as requested */}
          </div>
        </Col>
        <Col xs={24} sm={12} md={12}>
          <div className={styles.productRight}>
            <div className={styles.shareTC}>
              <span>Lorem Ipsum</span> <FaShare className={styles.shareIcon} />
            </div>
            <h2 className={styles.productTitle}>Lorem Ipsum Dolor sit Amet</h2>
            <div className={styles.priceAndStock}>
              <span className={styles.productPrice}>$8.99</span>
              <span className={styles.inStock}>In-Stock</span>
            </div>
            <div className={styles.quantityAndCart}>
              <div className={styles.quantitySelector}>
                <button
                  className={styles.quantityButton}
                  onClick={handleDecrement}
                  aria-label="Decrement quantity"
                >
                  <span className={styles.minus}>-</span>
                </button>
                <span className={styles.quantityValue}>{value}</span>
                <button
                  className={styles.quantityButton}
                  onClick={handleIncrement}
                  aria-label="Increment quantity"
                >
                  <span className={styles.plus}>+</span>
                </button>
              </div>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className={styles.submitButton}
              >
                Add to Cart
                <div className={styles.arrowBtn}>
                  <FaCartPlus />
                </div>
              </Button>
            </div>
            <div className={styles.details}>
              <Collapse
                activeKey={activeKey}
                onChange={onChange}
                expandIcon={({ isActive }) =>
                  isActive ? <MinusOutlined /> : <PlusOutlined />
                }
                ghost
                className={styles.faqCollapse}
                expandIconPosition="end"
              >
                <Panel
                  header="Descriptions"
                  key="1"
                  className={styles.faqPanel}
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Condimentum mauris
                    commodo nisl dictum commodo massa sagittis. Venatis blandit
                    sit pellentesque quis augue et eu. Massa tortor platea
                    lectus in vel laoreet integer ultrices Lorem ipsum dolor sit
                    amet consectetur.
                  </p>
                </Panel>
                <Panel
                  header="Shipping time"
                  key="2"
                  className={styles.faqPanel}
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Condimentum mauris
                    commodo nisl dictum commodo massa sagittis. Venatis blandit
                    sit pellentesque quis augue et eu. Massa tortor platea
                    lectus in vel laoreet integer ultrices Lorem ipsum dolor sit
                    amet consectetur.
                  </p>
                </Panel>
              </Collapse>
            </div>
            <div className={styles.paymentMethods}>
              <span className={styles.paymentMethodsTxt1}>
                <CiCreditCard1  />
                Payment Method
              </span>
              <div className={styles.paymentIcons}>
                <span className={styles.cardIcon}>
                  <Image
                    src={payCart1}
                    width={30}
                    height={20}
                    alt="mastercard"
                  />
                </span>
                <span className={styles.cardIcon}>
                  <Image src={payCart2} width={30} height={20} alt="visa" />
                </span>
                <span className={styles.cardIcon}>
                  <Image src={payCart3} width={30} height={20} alt="amex" />
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
