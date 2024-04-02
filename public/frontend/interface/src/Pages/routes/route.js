
import Login from "../Login";
import PublicLayout from "../PublicLayout";

const router = {
  path: '/',
  element: <PublicLayout></PublicLayout>,
  children: [
    {
      path: '',
      element: <Login></Login>
    },


  ],
  // path: '/login',
  // element: <Login></Login>,


};

export default router;