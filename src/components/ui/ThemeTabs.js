import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './ThemeTabs.module.scss';

const ThemeTabs = ({ tabItems, onTabClick }) => {
  const [activeKey, setActiveKey] = useState(tabItems[0].key);

  const handleTabClick = (key) => {
    setActiveKey(key);
    if (onTabClick) {
      onTabClick(key); // Call the parent component's function if provided
    }
  };

  return (
    <div className={styles.themeTabsContainer}>
      {tabItems.map((item) => (
        <button
          key={item.key}
          className={classNames(
            styles.tabItem,
            { [styles.tabItemActive]: item.key === activeKey }
          )}
          onClick={() => handleTabClick(item.key)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default ThemeTabs;