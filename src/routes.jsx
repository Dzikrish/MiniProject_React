import ListUser from "./pages/ListUser";
import Login from "./pages/Login";
import UserDetail from "./pages/UserDetail";
import ProtectedRoute from "./hoc/ProtectedRoutes";
import Registrasi from "./pages/Register";

export const routes = [
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Registrasi",
    element: <Registrasi />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <ListUser />
      </ProtectedRoute>
    ),
  },
  {
    path: "/UserDetail/:id",
    element: (
      <ProtectedRoute>
        <UserDetail />
      </ProtectedRoute>
    ),
  },
];
