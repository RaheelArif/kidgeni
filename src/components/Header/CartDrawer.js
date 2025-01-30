// src/components/CartDrawer.js
import React from "react";
import { Drawer } from "antd";
import { IoClose } from "react-icons/io5"; // Import close icon
import styles from "./CartDrawer.module.scss"; // Create a separate SCSS module
import BlackButton from "../ui/BlackButton";
import CartItem from "./CartItem"; // Import the CartItem component
import dummyCat from "/public/images/dummyCat.png"; // Import the CartItem component

const CartDrawer = ({ visible, onClose,  }) => {
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
    <div className={"drawer-cart-container"}>
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
            onClick={onClose} // Close the drawer when clicked
            className=""
            iconStyle={{ color: "white", marginLeft: "5px" }} // Custom icon styles
          />
        </div>
        {cartItems?.length > 0 ? (
          cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}

      </Drawer>
    </div>
  );
};

export default CartDrawer;
