import CartItem from "../../Components/CartItem/CartItem";
import "../Cart/Cart.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const Cart = () => {
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);
  const cart = useSelector((state) => state.phlox.cart);
  const userInfo = useSelector((state) => state.phlox.userInfo);

  useEffect(() => {
    let price = 0;
    cart.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price.toFixed(2));
  }, [cart]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to checkout!");
    }
  };

  const config = {
    public_key: "FLWPUBK_TEST-3b34569f576cd8ed398883ca2e196bf9-X",
    tx_ref: Date.now(),
    amount: totalAmt,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: userInfo ? userInfo.email : "",
      phone_number: "08131839432",
      name: "phlox",
    },
    customizations: {
      title: "Phlox",
      description: "Payment for items in cart",
      // logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      logo: "/Images/logo.jpeg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay to Phlox",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="cart">
      <div className="cart-container">
        {cart.length === 0 ? (
          <>
            <h2>Your Cart is Empty!</h2>
            <p className="home">
              <Link className="link" to="/">
                Go Back Home 🤗
              </Link>
            </p>
          </>
        ) : (
          <>
            <h2>
              Your Cart
              <span>
                <CardGiftcardOutlinedIcon />
              </span>
            </h2>
            <div className="cart-total">
              <CartItem />
              <div className="total">
                <h3>Cart Total</h3>
                <h4>
                  Subtotal: <span>$ {totalAmt}</span>
                </h4>
                <p>
                  {/* Your happiness is on the way! 🚚 Your order is on its way and
                  will be at your doorstep soon. Thank you for choosing us! 😊🌟 */}
                  Ready to make your purchase? Click `Checkout` to breeze
                  through and complete your order. We`re excited to get your
                  goodies on their way to you! 🛍️💳
                </p>

                <div className="total-title">
                  <h3>Total</h3>
                  <p>$ {totalAmt}</p>
                </div>
                <button onClick={handleCheckout}>proceed to checkout</button>
                {payNow && (
                  <div>
                    <FlutterWaveButton {...fwConfig} className="pay" />
                    {/* <RaveProvider {...raveConfig}>
                      <RavePaymentButton className="pay">
                        Pay to Phlox
                      </RavePaymentButton>
                    </RaveProvider> */}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
