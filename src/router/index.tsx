import { createBrowserRouter, Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import PageContainer from "../components/PageContainer";
import FriendsPage from "../pages/friendsPage";
import Home from "../pages/home";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import ProfilePage from "../pages/profilePage";
import PATH from "./paths";
import AuthProvider from "../providers/AuthProvider";

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: (
      <AuthProvider>
        <PageContainer>
          <Outlet />
          <Nav />
        </PageContainer>
      </AuthProvider>
    ),
    children: [
      {
        path: PATH.HOME,
        element: <Home />,
      },
      {
        path: PATH.FRIENDS,
        element: <FriendsPage />,
      },
      {
        path: PATH.PROFILE,
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: PATH.LOGIN,
    element: (
      <PageContainer>
        <LoginPage />
      </PageContainer>
    ),
  },
  {
    path: PATH.REGISTER,
    element: (
      <AuthProvider>
        <PageContainer>
          <RegisterPage />
        </PageContainer>
      </AuthProvider>
    ),
  },
]);

export default router;
