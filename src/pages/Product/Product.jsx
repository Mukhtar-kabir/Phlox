import { useParams } from "react-router-dom";
import "../Product/Product.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/phloxSlice";
import { ToastContainer, toast } from "react-toastify";
import { setSelectedProduct } from "../../redux/phloxSlice";
// import { decreamentQuantity, increamentQuantity } from "../../redux/phloxSlice";

const products = [
  {
    image: "/Images/1.JPG",
    title: "Men`s Cloth",
    price: 120,
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas explicabo velit ipsum aut praesentium itaque recusandae a similique cum.",
    newSeason: true,
  },
  {
    image: "/Images/2.JPG",
    title: "Men`s Cloth",
    price: 120,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas explicabo velit ipsum aut praesentium itaque a similique cum.",
    id: 2,
  },
  {
    image: "/Images/3.JPG",
    title: "Men`s Cloth",
    price: 115,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas explicabo aut praesentium itaque a similique cum.",
    id: 3,
    newSeason: true,
  },
  {
    image: "/Images/4.JPG",
    title: "Men`s Cloth",
    price: 150,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas explicabo velit ipsum aut praesentium similique cum.",
    id: 4,
  },
  {
    image: "/Images/5.JPG",
    title: "Men`s Cloth",
    price: 110,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas explicabo ipsum aut praesentium itaque a similique cum.",
    id: 5,
  },
  {
    image: "/Images/6.JPG",
    title: "Men`s Cloth",
    price: 130,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas explicabo velit ipsum aut praesentium itaque a similique cum.",
    id: 6,
    newSeason: true,
  },
  {
    image: "/Images/7.JPG",
    title: "Men`s Cloth",
    price: 190,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas aut praesentium itaque a similique cum.",
    id: 7,
  },
  {
    image: "/Images/8.JPG",
    title: "Women`s Cloth",
    price: 160,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas explicabo velit ipsum au itaque a similique cum.",
    id: 8,
    newSeason: true,
  },
];

const Product = () => {
  const { id } = useParams();
  let [baseQty, setBaseQty] = useState(1);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.phlox.cart);

  // Find the product with the matching id
  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  useEffect(() => {
    // Dispatch action to set the selected product in the store
    dispatch(setSelectedProduct(selectedProduct));
  }, [dispatch, selectedProduct]);

  return (
    <div className="product">
      <div className="container">
        <img
          src={`../../${selectedProduct.image}`}
          alt={selectedProduct.title}
        />
        <div className="title">
          <h1>{selectedProduct.title}</h1>
          <p>{selectedProduct.desc}</p>
          <div className="quantity">
            <h5>Quantity</h5>
            <div className="buttons">
              <button
                onClick={() =>
                  setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                }
              >
                -
              </button>

              <h6>{baseQty}</h6>
              <button onClick={() => setBaseQty(baseQty + 1)}>+</button>
            </div>
          </div>
          <div className="price">
            <h3>${selectedProduct.price}</h3>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: selectedProduct.id,
                    title: selectedProduct.title,
                    image: selectedProduct.image,
                    price: selectedProduct.price,
                    quantity: baseQty,
                  })
                ) && toast.success(`${selectedProduct.title} is added`)
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
        {selectedProduct.newSeason && <span>New Season</span>}
      </div>
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

export default Product;
