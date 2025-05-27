'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentButton({ sessionId, amount }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loadScript = (src) =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const displayRazorpay = async () => {
    setLoading(true);
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load.");
      setLoading(false);
      return;
    }

    const orderData = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    }).then((t) => t.json());

    if (!orderData?.id) {
      alert("Failed to create Razorpay order");
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: "INR",
      name: "Inviewo",
      description: "Book Your Interview Session",
      order_id: orderData.id,
      handler: async function (response) {
        const verifyRes = await fetch("http://localhost:5000/api/payment/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            session_id: sessionId,
            amount,
          }),
        }).then((t) => t.json());

        if (verifyRes.success) {
          setMessage("✅ Payment successful! Redirecting...");
          setTimeout(() => {
            router.push('/');  // Redirect to homepage after 2 seconds
          }, 2000);
        } else {
          setMessage("❌ Payment verification failed.");
        }
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#6366f1", // Tailwind indigo-500
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={displayRazorpay}
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
      <p className="mt-2 text-sm text-green-600">{message}</p>
    </>
  );
}
