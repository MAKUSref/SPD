import { Button, TextField } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useForm } from "react-hook-form";
import "./style.scss";
import { useEffect, useMemo, useState } from "react";
import { useRegisterUsernameMutation } from "../../redux/api/userApi";
import { useLocation, useNavigate } from "react-router-dom";
import PATH from "../../router/paths";

interface AddNicknameSchema {
  username: string;
}

const RegisterPage = () => {
  const [nicknameError, setNicknameError] = useState<undefined | string>(
    undefined
  );
  const [registerUsername] = useRegisterUsernameMutation();

  const navigate = useNavigate();
  const { search } = useLocation();

  const { register, handleSubmit } = useForm<AddNicknameSchema>();

  const queries = useMemo(() => new URLSearchParams(search), [search]);

  const onSubmit = (data: AddNicknameSchema) => {
    setNicknameError(undefined);

    if (!data.username) {
      setNicknameError("* User name must be provided");
      return;
    }

    registerUsername(data.username)
      .unwrap()
      .then(() => {
        navigate(PATH.HOME);
      })
      .catch((err) => {
        console.log("err", err);
        setNicknameError("* Given username already in use.");
      });
  };

  useEffect(() => {
    if (!queries.has("token")) {
      navigate(PATH.LOGIN);
    }
  }, [navigate, queries]);

  return (
    <>
      <PageHeader title="Create your account" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="register-page">
          <div className="form">
            <TextField
              {...register("username")}
              label="Username"
              size="small"
              fullWidth
              error={!!nicknameError}
              helperText={nicknameError}
            />
            <p className="description">
              Create your username which will show to other users.
            </p>
          </div>
          <div className="submit-container">
            <Button
              className="submit-btn"
              variant="contained"
              fullWidth
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
