import React from "react";
import styles from "./CheckoutForm.module.scss";
import { PiArrowRight } from "react-icons/pi";
import BlackButton from "../ui/BlackButton";
import dummyCat from "/public/images/dummyCat.png";
import CartItem from "../Header/CartItem";
import { BsPatchCheck } from "react-icons/bs";
export default function OrderConfirmation() {
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
    <div className={styles.orderConfirmationContainer}>
      <div className={styles.orderConfirmationContainer2}>
        <div className={styles.checkoutFormWrapper}>
          <h1 className={styles.checkoutTitle}>
            <span>
              Order <i>Confirmation</i>
            </span>{" "}
            <b>
              <BsPatchCheck />
            </b>
          </h1>
          {cartItems?.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                //   borderBottom={true}

                key={item.id}
                item={item}
              />
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
          <div className={styles.priceContainer}>
            <p className={styles.priceText}>
              <span>Subtotal</span> <b> $26.97</b>
            </p>
            <p className={styles.priceText}>
              <span>Dscount</span> <b> %97</b>
            </p>
            <p className={styles.priceText}>
              <span>Vat</span> <b> $26.97</b>
            </p>
            <p className={styles.priceText}>
              <span>Total</span> <b> $26.97</b>
            </p>
            <BlackButton
              text="Back to  Home"
              icon={<PiArrowRight />}
              size="large"
              shape="round"
              // onClick={handleButtonClick}
              className="additional-class"
              iconStyle={{ color: "white", marginLeft: "5px" }} // Custom icon styles
              buttonStyle={{ backgroundColor: "blue" }} // Custom button styles
            />
          </div>
        </div>
      </div>
    </div>
  );
}
