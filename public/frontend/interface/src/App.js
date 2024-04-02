import './App.css';

import routes from './Pages/routes/route';
import { createHashRouter, RouterProvider } from 'react-router-dom';


function App() {
 
    const router = createHashRouter([
      routes
    ]);
    return <RouterProvider router={router}></RouterProvider>
  }


export default App;
