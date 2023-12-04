import PageHeader from "../../components/PageHeader";
import { useGetSelfFriendsQuery } from "../../redux/api/userApi";
import "./style.scss";
import AddFriendModal from "../../components/AddFriendModal";

const FriendsPage = () => {
  const { data: selfFriends } = useGetSelfFriendsQuery();

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
      </div>
    </>
  );
};

export default FriendsPage;
