import { useSelector, useDispatch } from "react-redux";
import "../CartItem/CartItem.scss";
import {
  decreamentQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from "../../redux/phloxSlice";
import { ToastContainer, toast } from "react-toastify";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const CartItem = () => {
  const cart = useSelector((state) => state.phlox.cart);
  const dispatch = useDispatch();

  const handleResetCart = () => {
    if (cart.length > 0) {
      dispatch(resetCart());
      <h2>Your Cart is Empty!</h2>;
    }
  };

  return (
    <div className="cart-items">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <button className="remove">
            <DeleteOutlineOutlinedIcon
              onClick={() =>
                dispatch(deleteItem(item.id)) &&
                toast.error(`${item.title} is removed`)
              }
            />
          </button>
          <div className="image">
            <img src={`../../${item.image}`} alt="productImg" />
            <h3>{item.title}</h3>
            {/* <p>${item.price}</p> */}
          </div>
          <div className="item-details">
            <div className="quantity">
              <p>${item.price}</p>
              <div className="buttons">
                <button
                  onClick={() =>
                    dispatch(
                      decreamentQuantity({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                      })
                    )
                  }
                >
                  -
                </button>

                <h6>{item.quantity}</h6>
                <button
                  onClick={() =>
                    dispatch(
                      increamentQuantity({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                      })
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
            <p className="price">${item.quantity * item.price}</p>
          </div>
        </div>
      ))}

      {cart.length === 0 ? (
        <h2>Your Cart is Empty!</h2>
      ) : (
        <button className="reset" onClick={handleResetCart}>
          reset cart
        </button>
      )}

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CartItem;
