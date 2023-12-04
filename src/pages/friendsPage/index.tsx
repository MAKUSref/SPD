import "./style.scss";
import PageHeader from "../../components/PageHeader";
import { useGetSelfFriendsQuery, useRemoveFriendMutation } from "../../redux/api/userApi";
import AddFriendModal from "../../components/AddFriendModal";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import profileImg from "../../assets/profile.jpg";
import beerSvg from "../../assets/beer.svg";

const FriendsPage = () => {
  const { data: selfFriends } = useGetSelfFriendsQuery();

  const [removeFriend] = useRemoveFriendMutation();

  const handleRemoveFriend = (username: string) => {
    removeFriend(username);
  }

  return (
    <>
      <PageHeader
        title="Friends"
        rightSection={
          <div>
            <AddFriendModal />
          </div>
        }
      />
      <div className="friend-page">
        {!selfFriends?.length && (
          <p className="description">
            You have no friends right now. But calm down maybe some day you meet
            some :{")"}
          </p>
        )}
        {selfFriends?.map((friend, i) => (
          <Grid className="friend-container" key={i} container>
            <Grid item xs={3}>
              <div className="friend-avatar">
                <img src={friend.friend.pic ?? profileImg} />
              </div>
            </Grid>
            <Grid item xs={8}>
              <Stack>
                <Typography className="username">
                  {friend.friend.username}
                  {friend.friend.counter && (
                    <span className="friend-counter">
                      <img src={beerSvg} />
                      {friend.friend.counter}
                    </span>
                  )}
                </Typography>
                <Typography className="sub-title">
                  {friend.friend.status ?? "No status"}
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton onClick={() => handleRemoveFriend(friend.friend.username ?? "")}>
                <RemoveIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </div>
    </>
  );
};

export default FriendsPage;
