import { IconButton } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import profileImg from "../../assets/profile.jpg";
import beerSvg from "../../assets/beer.svg";
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import "./style.scss";

const ProfilePage = () => {
  return (
    <>
      <PageHeader
        title="Profile"
        rightSection={
          <div>
            <IconButton color="inherit" className="edit-btn">
              <CreateRoundedIcon />
            </IconButton>
            <IconButton color="inherit" className="">
              <LogoutRoundedIcon />
            </IconButton>
          </div>
        }
      />
      <div className="profile-page">
        <div className="avatar-container">
          <div className="avatar-bg">
            <img src={profileImg} />
          </div>
        </div>
        <div className="user-id">#251022</div>
        <div className="user-name">Jonathan Stevenson</div>
        <div className="user-best-scores">
          <div className="single-score">
            <img src={beerSvg} />
            <span className="number">2</span>
          </div>
          <div className="single-score">
            <EmojiEventsRoundedIcon color="inherit" fontSize="inherit" className="icon" />
            <span className="number">2</span>
          </div>
        </div>

        <div className="score-container">
          <h4 className="title">Last week</h4>
          <div className="score-card">
            <div className="score-row">
              <span>Best</span>
              <div className="score">
                <img src={beerSvg} />
                <span className="score-number" style={{paddingTop: "2px"}}>4</span>
              </div>
            </div>
            <div className="score-row score-sub-row">
              <span>Overall</span>
              <span className="score-number">16</span>
            </div>
          </div>
        </div>

        <div className="score-container" style={{margin: '20px 0 100px'}}>
          <h4 className="title">Last Month</h4>
          <div className="score-card">
            <div className="score-row">
              <span>Best</span>
              <div className="score">
                <img src={beerSvg} />
                <span className="score-number" style={{paddingTop: "2px"}}>7</span>
              </div>
            </div>
            <div className="score-row score-sub-row">
              <span>Overall</span>
              <span className="score-number">21</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
