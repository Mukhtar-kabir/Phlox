import { useState } from "react";
import "../Login/Login.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addUser, removeUser } from "../../redux/phloxSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );

        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEmailPasswordLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName || "No Name", // Provide a default value
            email: user.email,
            image: user.photoURL || "/Images/profile.PNG",
          })
        );
        console.log("User signed in with email/password:", user);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Invalid email or password");
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log Out Successfully!");
        dispatch(removeUser());
        // dispatch(resetCart());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="form">
          <form onClick={handleEmailPasswordLogin}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password:</label>
            <div className="password-input">
              <div className="input">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <span
                onClick={() => setShowPassword(!showPassword)}
                className={`password-toggle ${showPassword ? "visible" : ""}`}
              >
                {showPassword ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </span>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit">Sign In </button>
            {/* <button onClick={handleSignOut}>Sign Out</button> */}
          </form>
        </div>
        <div className="google">
          <div onClick={handleGoogleLogin}>
            <div className="image">
              <img src="Images/googleIcon.jpeg" alt="Google Icon" />
              <p>Sign in with Google</p>
            </div>
          </div>
          <button onClick={handleSignOut}>Sign Out</button>
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

export default Login;
