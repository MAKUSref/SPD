import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import { useState } from "react";
import "./style.scss";
import { useForm } from "react-hook-form";
import { useAddFriendMutation } from "../../redux/api/userApi";

interface EditStatusSchema {
  username: string;
}

const EditStatusModal = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const { register, handleSubmit } = useForm<AddFriendSchema>();

  const [addFriend] = useAddFriendMutation();

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const onSubmit = (data: AddFriendSchema) => {
    setError(undefined);

    if (!data.username) {
      return;
    }

    addFriend(data.username)
      .unwrap()
      .then(() => setOpen(false))
      .catch((err) => {
        console.log(err);
        setError(err.data);
      });
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleOpen}>
        <PersonAddRoundedIcon />
      </IconButton>
      <Dialog className="add-friend-modal" open={open} onClose={handleClose}>
        <DialogTitle>Add Friend</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <TextField
                {...register("username")}
                label="Friend username"
                size="small"
                error={!!error}
                helperText={error}
              />
            </div>

            <Button
              className="add-btn"
              fullWidth
              variant="contained"
              type="submit"
            >
              Add
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditStatusModal;
