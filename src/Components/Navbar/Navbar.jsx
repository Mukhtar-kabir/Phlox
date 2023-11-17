import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "../Navbar/Navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.phlox.cart);
  const userInfo = useSelector((state) => state.phlox.userInfo);
  console.log(userInfo);

  return (
    <div className="header">
      <div className="left">
        <Link className="link" to="/">
          <img src="Images/icon.png" alt="LOGO" />
          <h1>PHLOX</h1>
        </Link>

        {/* <nav>
          
            <ul className="menu-items">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
          
        </nav> */}
      </div>

      <div className="right">
        <div className="item">
          <Link to="/cart">
            <div className="cartIcon">
              <ShoppingBagOutlinedIcon />
              <span className="count">{cart.length}</span>
            </div>
          </Link>
        </div>

        {/* <div className="item">
          <Link className="link" to="/">
            <SearchOutlinedIcon />
          </Link>
        </div> */}

        <Link className="link" to="/login">
          <div className="item">
            {userInfo && userInfo.image ? (
              <img src={userInfo.image} alt="user logo" />
            ) : (
              <PersonOutlineOutlinedIcon />
            )}
            {userInfo && <p className="name">{userInfo.name.split(" ")[0]}</p>}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
