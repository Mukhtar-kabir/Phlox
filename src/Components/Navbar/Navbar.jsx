import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "../Navbar/Navbar.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [openMenuBar, setOpenMenuBar] = useState(false);
  const cart = useSelector((state) => state.phlox.cart);

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

        <div className="item">
          <Link className="link" to="/">
            <PersonOutlineOutlinedIcon />
            {/* <img src="Images/profile.PNG" alt="" /> */}
          </Link>
        </div>

        <div className="hamburger" onClick={() => setOpenMenuBar(!openMenuBar)}>
          {openMenuBar ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
