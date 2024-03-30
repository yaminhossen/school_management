// import All from "../Backend/Management/Admin/Management/User/All";
import Demo_1 from "../Demo_1";
import Demo_2 from "../Demo_2";
import Demo_3 from "../Demo_3";
import DashboardLayout from "../DashboardLayout";
import user_route from "../Backend/Management/Admin/Management/user_management/User/Config/Routes";

import MainLanding from './../MainLanding';
import Login from "../Login";
import PublicLayout from "../PublicLayout";
import HomePage from "../HomePage";

const router = {
  path: '/',
  element: <PublicLayout></PublicLayout>,
  children: [
    {
      path: '',
      element: <HomePage></HomePage>
    },
    {
      path: 'login',
      element: <Login></Login>
    },

    {
      path: 'dashboard',
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: '',
          element: <MainLanding></MainLanding>,
        },
        // {
        //   path: 'crmentry',
        //   element: <CrmEntry></CrmEntry>
        // },
        
        user_route,

      ]
    },

  ],
  // path: '/login',
  // element: <Login></Login>,


};

export default router;