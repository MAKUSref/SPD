import { Button, Dialog, DialogContent, DialogTitle, IconButton, TextField } from "@mui/material";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import { useState } from "react";
import './style.scss';
import { useForm } from "react-hook-form";

interface AddFriendSchema {
  username: string;
}

const AddFriendModal = () => {
  const [open, setOpen] = useState(false);

  const { register } = useForm<AddFriendSchema>();

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <IconButton color="inherit" onClick={handleOpen}>
        <PersonAddRoundedIcon />
      </IconButton>
      <Dialog className="add-friend-modal" open={open} onClose={handleClose}>
        <DialogTitle>
          Add Friend
        </DialogTitle>
        <DialogContent>
          <div className="input-container">
            <TextField label="Friend username" size="small" />
          </div>

          <Button className="add-btn" fullWidth variant="contained">Add</Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddFriendModal;
