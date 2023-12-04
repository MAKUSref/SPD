import Logo from "../../assets/logo.png";
import "./style.scss";
import { Button } from "@mui/material";
import { useLoginMutation } from "../../redux/api/userApi";
import { useCallback } from "react";

function navigate(url: string) {
  window.location.href = url;
}

const LoginPage = () => {
  const [login] = useLoginMutation();

  const handleLogin = useCallback(async () => {
    login()
      .unwrap()
      .then((res) => {
        navigate(res.url);
      });
  }, [login]);

  return (
    <div className="login-page">
      <div>
        <div className="logo-container">
          <img className="logo-img" src={Logo} />
        </div>
        <p className="name">SipPal Discovery</p>
      </div>
      <div>
        <Button
          className="login-btn"
          variant="contained"
          fullWidth
          onClick={handleLogin}
        >
          Login via Google account
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
