// src/components/CartDrawer.js
import React from "react";
import { Drawer } from "antd";
import { IoClose, IoCloseOutline } from "react-icons/io5"; // Import close icon
import styles from "./CartDrawer.module.scss"; // Create a separate SCSS module
import BlackButton from "../ui/BlackButton";

const CartDrawer = ({ visible, onClose }) => {
  return (
    <div className={"drawer-ccart-container"}>
      <Drawer
       
        className={styles.drawerWrapper}
        placement="right"
        onClose={onClose}
        open={visible}
        closable={false}
        width={600}
       
      >
          <div className={styles.drawerHeader}>
            <span>Your Cart</span>
            <BlackButton
              text="Close"
              icon={<IoClose />}
              size="large"
              shape="round"
              // onClick={handleButtonClick}
              className=""
              iconStyle={{ color: "white", marginLeft: "5px" }} // Custom icon styles
            />
          </div>
        <p>Your cart is empty</p>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
