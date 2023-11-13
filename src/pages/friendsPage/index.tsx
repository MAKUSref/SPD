import { IconButton } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';

const FriendsPage = () => {
  return (
    <>
      <PageHeader
        title="Friends"
        rightSection={
          <div>
            <IconButton color="inherit">
              <PersonAddRoundedIcon />
            </IconButton>
          </div>
        }
      />
    </>
  );
};

export default FriendsPage;
