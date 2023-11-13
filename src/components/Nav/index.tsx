import IconButton from "@mui/material/IconButton";
import GroupIcon from "@mui/icons-material/Group";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import PATH from "../../router/paths";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="nav-item">
        <IconButton color="inherit" onClick={() => navigate(PATH.FRIENDS)}>
          <GroupIcon color="inherit" />
        </IconButton>
      </div>
      <div className="nav-item">
        <IconButton
          color="inherit"
          className="nav-item--home"
          onClick={() => navigate(PATH.HOME)}
        >
          <HomeRoundedIcon color="inherit" fontSize="large" />
        </IconButton>
      </div>
      <div className="nav-item">
        <IconButton color="inherit" onClick={() => navigate(PATH.PROFILE)}>
          <MenuRoundedIcon color="inherit" />
        </IconButton>
      </div>
    </div>
  );
};

export default Nav;
