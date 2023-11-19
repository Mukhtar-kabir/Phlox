import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "../Navbar/Navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.phlox.cart);
  const userInfo = useSelector((state) => state.phlox.userInfo);
  // console.log(userInfo);

  const getFirstName = () => {
    if (userInfo && userInfo.name) {
      const fullName = userInfo.name;
      const firstName = fullName.split(" ")[0];
      return firstName;
    }
    return "";
  };

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
              <AccountCircleOutlinedIcon className="icon" />
            )}
            {userInfo && <p>{getFirstName()}</p>}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
