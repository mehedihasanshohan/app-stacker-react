import { createBrowserRouter } from "react-router";
import Home from './../Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: '/apps',
    element: <div> apps</div>
  }
]);


export default router