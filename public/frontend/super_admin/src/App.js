import './App.css';
import Layout from "./Pages/DashboardLayout";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Demo_1 from './Pages/Demo_1';
import Demo_2 from './Pages/Demo_2';
import Demo_3 from './Pages/Demo_3';
import Main_content_page from './Pages/Main_content_page';
import routes from './Pages/routes/route';
import { createHashRouter, RouterProvider } from 'react-router-dom';


function App() {
 
    const router = createHashRouter([
      routes
    ]);
    return <RouterProvider router={router}></RouterProvider>
  }


export default App;
