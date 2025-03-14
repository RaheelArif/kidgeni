"use client";
import React, { useState } from 'react';
import { Collapse, Typography, Space } from 'antd';
import styles from './FAQSection.module.scss';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Title, Paragraph } = Typography;

const faqs = [
    {
        question: "Lorem ipsum dolor sit amet",
        answer: "Lorem ipsum dolor sit amet consectetur. Condimentum mauris commodo nisl dictum commodo massa sagittis. Venatis blandit sit pellentesque quis augue et eu. Massa tortor platea lectus in vel laoreet integer ultrices Lorem ipsum dolor sit amet consectetur.",
    },
    {
        question: "Lorem ipsum dolor sit amet",
        answer: "Lorem ipsum dolor sit amet consectetur. Condimentum mauris commodo nisl dictum commodo massa sagittis. Venatis blandit sit pellentesque quis augue et eu. Massa tortor platea lectus in vel laoreet integer ultrices Lorem ipsum dolor sit amet consectetur.",
    },
    {
        question: "Lorem ipsum dolor sit amet",
        answer: "Lorem ipsum dolor sit amet consectetur. Condimentum mauris commodo nisl dictum commodo massa sagittis. Venatis blandit sit pellentesque quis augue et eu. Massa tortor platea lectus in vel laoreet integer ultrices Lorem ipsum dolor sit amet consectetur.",
    },
    {
        question: "Lorem ipsum dolor sit amet",
        answer: "Lorem ipsum dolor sit amet consectetur. Condimentum mauris commodo nisl dictum commodo massa sagittis. Venatis blandit sit pellentesque quis augue et eu. Massa tortor platea lectus in vel laoreet integer ultrices Lorem ipsum dolor sit amet consectetur.",
    },
    {
        question: "Lorem ipsum dolor sit amet",
        answer: "Lorem ipsum dolor sit amet consectetur. Condimentum mauris commodo nisl dictum commodo massa sagittis. Venatis blandit sit pellentesque quis augue et eu. Massa tortor platea lectus in vel laoreet integer ultrices Lorem ipsum dolor sit amet consectetur.",
    },
];

const FAQSection = ({ }) => {
  const [activeKey, setActiveKey] = useState(['0']);

  const onChange = (key) => {
    setActiveKey(key);
  };
  return (
    <div className={styles.faqSection}>
      <Title level={2} className={styles.faqTitle}>
        Frequently asked question
      </Title>
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
        {faqs.map((faq, index) => (
          <Panel
            header={
              <Space align="center">
              
                <div
                  className={`${styles.circleNumber} ${
                    activeKey.includes(String(index)) ? styles.activeCircle : ""
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className={styles.question}>{faq.question}</div>
              </Space>
            }
            key={index}
            className={styles.faqPanel}
          >
            <Paragraph className={styles.answerPanel}>{faq.answer}</Paragraph>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQSection;