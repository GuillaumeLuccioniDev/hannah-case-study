import { createBrowserRouter } from "react-router-dom";
import { About } from "./About";
import App from "./App";
import { ErrorPage } from "./ErrorPage";
import { Profile } from "./Profile";
import { paths } from "./shared/paths";
import { redirect } from "react-router-dom";
import { Home } from "./Home";

export const router = createBrowserRouter([
  {
    path: paths.root,
    element: <App />,
    errorElement: <ErrorPage />,
    action: () => redirect(paths.profile),
    children: [
      {
        path: paths.profile,
        element: <Profile />,
      },
      {
        path: paths.about,
        element: <About />,
      },
      {
        path: paths.root,
        element: <Home />,
      },
    ],
  },
]);
