import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './CustomBlackTabs.module.scss';

const CustomBlackTabs = ({ tabItems, children , activeKey, setActiveKey }) => {

  const onChange = (key) => {
    setActiveKey(key);
  };

  return (
    <div className={styles.customBlackTabsContainer}>
      {tabItems.map((item) => (
        <div
          key={item.key}
          className={classNames(
            styles.tabItem,
            { [styles.tabItemActive]: item.key === activeKey }
          )}
          onClick={() => onChange(item.key)}
        >
          {item.label}
        </div>
      ))}
      {children && children[tabItems.findIndex(el => el.key === activeKey)]}
    </div>
  );
};

export default CustomBlackTabs;