import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
   },
   {
      path: "/login",
      element: null,
   },
   {
      path: "/about",
      element: null,
   },
   {
      path: "/register",
      element: null,
   },
]);

export default router;
