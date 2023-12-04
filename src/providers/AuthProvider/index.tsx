import { PropsWithChildren, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setToken } from "../../redux/session/sessionSlice";
import PATH from "../../router/paths";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const session = useAppSelector((state) => state.session);

  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const queries = useMemo(() => new URLSearchParams(location.search), [location]);

  useEffect(() => {
    const token = queries.get('token');

    if (token) {
      dispatch(setToken(token));
    }

    if (!session.token && !token) {
      navigate(PATH.LOGIN);
      return;
    }
  }, [dispatch, location, navigate, queries, session.token]);

  return <>{children}</>;
};

export default AuthProvider;
