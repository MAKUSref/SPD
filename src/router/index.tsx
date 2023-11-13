import { createBrowserRouter, Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import PageContainer from "../components/PageContainer";
import FriendsPage from "../pages/friendsPage";
import Home from "../pages/home";
import ProfilePage from "../pages/profilePage";
import PATH from "./paths";

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: (
      <PageContainer>
        <Outlet />
        <Nav />
      </PageContainer>
    ),
    children: [
      {
        path: PATH.HOME,
        element: <Home />,
      },
      {
        path: PATH.FRIENDS,
        element: <FriendsPage />
      },
      {
        path: PATH.PROFILE,
        element: <ProfilePage />
      }
    ],
  },
]);

export default router;
