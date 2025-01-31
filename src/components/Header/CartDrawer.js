// src/components/CartDrawer.js
import React from "react";
import { Drawer } from "antd";
import { IoClose } from "react-icons/io5"; // Import close icon
import styles from "./CartDrawer.module.scss"; // Create a separate SCSS module
import BlackButton from "../ui/BlackButton";
import CartItem from "./CartItem"; // Import the CartItem component
import dummyCat from "/public/images/dummyCat.png"; // Import the CartItem component
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const CartDrawer = ({ visible, onClose }) => {
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
        width={550}
      >
        <div className={styles.drawerContent}>
          <div>
            <div className={styles.drawerHeader}>
              <span>Your Cart</span>
              <BlackButton
                isBlack={true}
                text="Close"
                icon={<IoClose />}
                size="large"
                shape="round"
                onClick={onClose} // Close the drawer when clicked
                className=""
              />
            </div>
            {cartItems?.length > 0 ? (
              cartItems.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
          <div className={styles.drawerBottom}>
            <div>
              Subtotal <b>$29.99</b>
            </div>

            <div className={styles.CheckoutBottom}>
              <Link href={"/checkout"}>
                <BlackButton
                  text="Checkout"
                  icon={<FaArrowRight />}
                  size="large"
                  shape="round"
                  onClick={onClose} // Close the drawer when clicked
                  className=""
                />
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
