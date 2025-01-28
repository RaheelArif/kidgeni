"use client";
import React from "react";
import { Typography, Select, Space } from "antd";
import styles from "./DiscoverSection.module.scss";

const { Title } = Typography;

const DiscoverSection = () => {
  const handleSelectChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={styles.discoverSectionContainer}>
      <div className={styles.titlesWrapper}>
        <p className={styles.mainTitle}>Discover Children Creations</p>
      </div>
      <Space className={styles.selectWrapper}>
        <Select
          defaultValue="Child's Age: 4-6"
          size="large"
          bordered={false}
          className={styles.selectMenu}
          onChange={handleSelectChange}
          options={[
            { value: "Child's Age: 4-6", label: "Child's Age: 4-6" },
            { value: "Child's Age: 7-9", label: "Child's Age: 7-9" },
          ]}
        />
        <Select
          defaultValue="English"
          size="large"
          bordered={false}
          className={styles.selectMenu}
          onChange={handleSelectChange}
          options={[
            { value: "English", label: "English" },
            { value: "Spanish", label: "Spanish" },
          ]}
        />
        <Select
          defaultValue="All Function"
          size="large"
          bordered={false}
          className={styles.selectMenu}
          onChange={handleSelectChange}
          options={[
            { value: "All Function", label: "All Function" },
            { value: "Learning", label: "Learning" },
          ]}
        />
      </Space>
    </div>
  );
};

export default DiscoverSection;
