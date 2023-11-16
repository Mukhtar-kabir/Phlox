import "../Login/Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="google">
          <div className="image">
            <img src="Images/googleIcon.jpeg" alt="Google Icon" />
            <p>Sign in with Google</p>
          </div>
          <button>Sign Out</button>
        </div>

        <div className="google">
          <div className="image">
            <img src="Images/githubIcon.jpeg" alt="GitHub Icon" />
            <p>Sign in with GitHub</p>
          </div>
          <button>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
