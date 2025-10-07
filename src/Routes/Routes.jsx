import { createBrowserRouter } from "react-router";
import Home from './../Pages/Home';
import MainLayOut from './../Layouts/MainLayOut';
import Errorpage from "../Pages/Errorpage";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      { index: true, element: <Home></Home>},
      { path: '/details', element: <AppDetails></AppDetails>}
    ]
  }
]);


export default router