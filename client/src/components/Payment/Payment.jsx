import axios from "axios";
import React from "react";

const Payment = () => {
  const chackoutHandler = async (amount) => {
    const { data } = await axios.post("http://localhost:8800/api/order", { amount });
    const { data: { keyId } } = await axios.get("http://localhost:8800/api/getkey");

    const options = {
      key: keyId,
      amount: data.order.amount,
      currency: "INR",
      name: "Your App Name",
      description: "Test Transaction",
      order_id: data.order.id,
      callback_url: "http://localhost:8800/api/paymentVerification",
      prefill: {
        name: "Your Name",
        email: "your.email@example.com",
        contact: "1234567890",
      },
      theme: { color: "#45D347" },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

 return (
    <div>
      <button onClick={() => chackoutHandler(5)}></button>
    </div>
  );
};

export default Payment;
