import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import { useState } from "react";
import "./style.scss";
import { useForm } from "react-hook-form";
import { useChangeStatusMutation, useGetSelfQuery } from "../../redux/api/userApi";

interface EditStatusSchema {
  status: string;
}

const EditStatusModal = () => {
  const { data: selfInfo } = useGetSelfQuery();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const { register, handleSubmit } = useForm<EditStatusSchema>();

  const [changeStatus] = useChangeStatusMutation();

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const onSubmit = (data: EditStatusSchema) => {
    setError(undefined);

    changeStatus(data.status)
      .unwrap()
      .then(() => setOpen(false))
      .catch((err) => {
        console.log(err);
        setError(err.data);
      });
  };

  return (
    <>
      <IconButton color="inherit" className="edit-btn" onClick={handleOpen}>
        <CreateRoundedIcon />
      </IconButton> 
      <Dialog className="add-friend-modal" open={open} onClose={handleClose}>
        <DialogTitle>Change status</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <TextField
                {...register("status")}
                defaultValue={selfInfo?.status}
                label="Current status"
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
              Change
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditStatusModal;
