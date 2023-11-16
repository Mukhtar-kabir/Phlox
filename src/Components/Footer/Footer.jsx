import "../Footer/Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <h3>PHLOX</h3>
        </div>

        <div className="footer-item">
          <h4>Quick links</h4>
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Blog
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-item">
          <ul>
            <li>Privacy</li>
            <li>Become an agent</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
