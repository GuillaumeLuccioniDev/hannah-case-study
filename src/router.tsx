import { createBrowserRouter } from "react-router-dom";
import { About } from "./About";
import App from "./App";
import { ErrorPage } from "./ErrorPage";
import { Profile } from "./Profile";
import { paths } from "./shared/paths";

export const router = createBrowserRouter([
  {
    path: paths.root,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: paths.profile,
        element: <Profile />,
      },
      {
        path: paths.about,
        element: <About />,
      },
    ],
  },
]);
