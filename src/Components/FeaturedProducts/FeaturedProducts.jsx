import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/phloxSlice";
import "../FeaturedProducts/FeaturedProducts.scss";
import { ToastContainer, toast } from "react-toastify";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";

const products = [
  {
    image: "Images/1.JPG",
    title: "Men`s Cloth",
    price: 120,
    id: 1,
    newSeason: true,
  },
  {
    image: "Images/2.JPG",
    title: "Men`s Cloth",
    price: 120,
    id: 2,
  },
  {
    image: "Images/3.JPG",
    title: "Men`s Cloth",
    price: 115,
    id: 3,
    newSeason: true,
  },
  {
    image: "Images/4.JPG",
    title: "Men`s Cloth",
    price: 150,
    id: 4,
  },
  {
    image: "Images/5.JPG",
    title: "Men`s Cloth",
    price: 110,
    id: 5,
  },
  {
    image: "Images/6.JPG",
    title: "Men`s Cloth",
    price: 130,
    id: 6,
    newSeason: true,
  },
  {
    image: "Images/7.JPG",
    title: "Men`s Cloth",
    price: 190,
    id: 7,
  },
  {
    image: "Images/8.JPG",
    title: "Women`s Cloth",
    price: 160,
    id: 8,
    newSeason: true,
  },
];

const FeaturedProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.phlox.cart);

  const handleSelection = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="featuredProducts">
      <h1>Featured Products</h1>
      <p>
        Elevate your style with our Featured Products. Explore the latest trends
        in Men`s and Women`s fashion. Quality meets fashion-forward designs.
        Shop now!
      </p>

      <div className="items">
        {products.map((product) => (
          <div className="item" key={product.id}>
            {/* <img
              src={product.image}
              alt={product.title}
              onClick={() => handleSelection(product)}
            /> */}
            <img
              src={`../../${product.image}`}
              alt={product.title}
              onClick={() => handleSelection(product)}
            />
            <div className="title">
              <h3>{product.title}</h3>
              <div className="price">
                <span>$ {product.price}</span>
                <button
                  onClick={() => {
                    const isProductInCart = cart.some(
                      (item) => item.id === product.id
                    );

                    if (isProductInCart) {
                      toast.error(`${product.title} is already in your cart!`);
                    } else {
                      dispatch(
                        addToCart({
                          id: product.id,
                          title: product.title,
                          image: product.image,
                          price: product.price,
                          quantity: 1,
                        })
                      );
                      toast.success(`${product.title} is added to cart!`);
                    }
                  }}
                >
                  add to cart
                </button>
              </div>
            </div>
            {product.newSeason && <p>new season</p>}
          </div>
        ))}
      </div>

      <div className="things">
        <div className="things-items">
          <div className="thing">
            <div className="icon">
              <LocalShippingOutlinedIcon />
            </div>
            <div className="title">
              <h3>Free Shipping</h3>
              <p>Free Shipping in All Order</p>
            </div>
          </div>

          <div className="thing">
            <div className="icon">
              <MonetizationOnOutlinedIcon />
            </div>
            <div className="title">
              <h3>Money Guarantee</h3>
              <p>30Days Money Back</p>
            </div>
          </div>

          <div className="thing">
            <div className="icon">
              <ContactSupportOutlinedIcon />
            </div>
            <div className="title">
              <h3>Online Support 24/7</h3>
              <p>Technical Support 24/7</p>
            </div>
          </div>

          <div className="thing">
            <div className="icon">
              <PaymentOutlinedIcon />
            </div>
            <div className="title">
              <h3>Secure Pament</h3>
              <p>All Card Accepted</p>
            </div>
          </div>
        </div>
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

export default FeaturedProducts;
