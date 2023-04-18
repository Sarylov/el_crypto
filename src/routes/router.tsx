import { createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { WelcomeScreen } from "./welcome-screen";
import { Login } from "./login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <WelcomeScreen />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
