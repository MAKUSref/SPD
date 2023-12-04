import { IconButton } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import profileImg from "../../assets/profile.jpg";
import beerSvg from "../../assets/beer.svg";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import "./style.scss";
import { useGetSelfCounterQuery, useGetSelfQuery } from "../../redux/api/userApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut } from "../../redux/session/sessionSlice";

const ProfilePage = () => {
  const { data: selfInfo } = useGetSelfQuery();
  const { data: selfCounter } = useGetSelfCounterQuery();
  const session = useAppSelector((state) => state.session);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  }

  return (
    <>
      <PageHeader
        title="Profile"
        rightSection={
          <div>
            <IconButton color="inherit" className="edit-btn">
              <CreateRoundedIcon />
            </IconButton>
            <IconButton color="inherit" className="" onClick={handleLogout}>
              <LogoutRoundedIcon />
            </IconButton>
          </div>
        }
      />
      <div className="profile-page">
        <div className="avatar-container">
          <div className="avatar-bg">
            <img src={session.picture ?? profileImg} />
          </div>
        </div>
        <div className="user-id">{selfInfo?.firstName} {selfInfo?.lastName}</div>
        <div className="user-name">{selfInfo?.username}</div>
        <div className="user-best-scores">
          <div className="single-score">
            <img src={beerSvg} />
            <span className="number">{selfCounter ?? 0}</span>
          </div>
          <div className="single-score">
            <LocalFireDepartmentIcon
              color="inherit"
              fontSize="inherit"
              className={`icon ${!selfInfo?.streak && 'grayscale-icon'}`}
            />
            <span className="number">{selfInfo?.streak}</span>
          </div>
        </div>

        <div className="score-container">
          <h4 className="title">Last week</h4>
          <div className="score-card">
            <div className="score-row">
              <span>Best</span>
              <div className="score">
                <img src={beerSvg} />
                <span className="score-number" style={{ paddingTop: "2px" }}>
                  4
                </span>
              </div>
            </div>
            <div className="score-row score-sub-row">
              <span>Overall</span>
              <span className="score-number">16</span>
            </div>
          </div>
        </div>

        <div className="score-container" style={{ margin: "20px 0 100px" }}>
          <h4 className="title">Last Month</h4>
          <div className="score-card">
            <div className="score-row">
              <span>Best</span>
              <div className="score">
                <img src={beerSvg} />
                <span className="score-number" style={{ paddingTop: "2px" }}>
                  7
                </span>
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
