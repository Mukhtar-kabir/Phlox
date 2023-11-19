// import CartItem from "../../Components/CartItem/CartItem";
// import "../Cart/Cart.scss";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { StripeCheckout } from "react-stripe-checkout";

// const Cart = () => {
//   const [totalAmt, setTotalAmt] = useState("");
//   const [payNow, setPayNow] = useState(false);
//   const cart = useSelector((state) => state.phlox.cart);
//   const userInfo = useSelector((state) => state.phlox.userInfo);

//   useEffect(() => {
//     let price = 0;
//     cart.forEach((item) => {
//       price += item.price * item.quantity;
//     });
//     setTotalAmt(price.toFixed(2));
//   }, [cart]);

//   const handleCheckout = () => {
//     if (userInfo) {
//       setPayNow(true);
//     } else {
//       toast.error("Please sign in to checkout!");
//     }
//   };

//   return (
//     <div className="cart">
//       <div className="cart-container">
//         {cart.length === 0 ? (
//           <>
//             <h2>Your Cart is Empty!</h2>
//             <p className="home">
//               <Link className="link" to="/">
//                 Go Back Home 🤗
//               </Link>
//             </p>
//           </>
//         ) : (
//           <>
//             <h2>
//               Your Cart
//               <span>
//                 <CardGiftcardOutlinedIcon />
//               </span>
//             </h2>
//             <div className="cart-total">
//               <CartItem />
//               <div className="total">
//                 <h3>Cart Total</h3>
//                 <h4>
//                   Subtotal: <span>$ {totalAmt}</span>
//                 </h4>
//                 <p>
//                   {/* Your happiness is on the way! 🚚 Your order is on its way and
//                   will be at your doorstep soon. Thank you for choosing us! 😊🌟 */}
//                   Ready to make your purchase? Click `Checkout` to breeze
//                   through and complete your order. We`re excited to get your
//                   goodies on their way to you! 🛍️💳
//                 </p>

//                 <div className="total-title">
//                   <h3>Total</h3>
//                   <p>$ {totalAmt}</p>
//                 </div>
//                 <button onClick={handleCheckout}>proceed to checkout</button>
//                 {payNow && (
//                   <div>
//                     <StripeCheckout
//                       stripeKey="FLWPUBK_TEST-3726127cfedb14990dffc41a97b1c777-X"
//                       name="Phlox"
//                       amount={totalAmt * 100}
//                       label="Pay to Phlox"
//                       descriptiion={`Your total amount is ${totalAmt}`}
//                       // token={payment}
//                       email={userInfo.email}
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import CartItem from "../../Components/CartItem/CartItem";
import "../Cart/Cart.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { RaveProvider, RavePaymentButton } from "react-ravepayment";

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

  const raveConfig = {
    txref: new Date().toString(),
    customer_email: userInfo.email,
    customer_phone: 2348131839432,
    amount: totalAmt,
    PBFPubKey: "FLWPUBK_TEST-3b34569f576cd8ed398883ca2e196bf9-X",
    onSuccess: (response) => {
      console.log("Payment successful:", response);
      // Handle successful payment
    },
    onClose: () => {
      console.log("Payment closed");
      // Handle payment closed
    },
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
                    <RaveProvider {...raveConfig}>
                      <RavePaymentButton className="pay">
                        Pay to Phlox
                      </RavePaymentButton>
                    </RaveProvider>
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
