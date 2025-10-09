import { createBrowserRouter } from "react-router";
import Home from './../Pages/Home';
import MainLayOut from './../Layouts/MainLayOut';
import Errorpage from "../Pages/Errorpage";
import AppDetails from "../Pages/AppDetails";
import Apps from "../Pages/Apps";
import InstalledApp from "../Pages/Installation";
import NoAppsFound from "../Pages/NoAppsFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      { index: true, element: <Home></Home>},
      // { path: '/details', element: <AppDetails></AppDetails>},
      {path: '/apps', element: <Apps></Apps>},
      {path: '/app/:id', element: <AppDetails></AppDetails>},
      {path: '/installations', element: <InstalledApp></InstalledApp>},
      {path: '/no-apps-found', element: <NoAppsFound></NoAppsFound>}
    ]
  }
]);


export default router