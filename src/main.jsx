import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './components/Home';
import Appliedjobs from './components/Appliedjobs';
import Statistics from './components/Statistics';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';


import JobDetails from './components/JobDetails';
// import { jobLoder } from '../public/Loader/JobsData';
// import { jobDataAndStorageData } from '../public/Loader/storeData&JobData';

const router = createBrowserRouter([

{
  path:'/',
  element:<App></App>,
  errorElement:<ErrorPage></ErrorPage>,
  children:[

    {
      path:'/',
      element: <Home></Home>,
    },
    {
      path:'/appliedjobs',
      element:<Appliedjobs></Appliedjobs>,
      loader: () => fetch('/jobData.json')
    },
    {
      path:'/job-details/:id',
      element:<JobDetails></JobDetails>,
      loader: () => fetch('/jobData.json')
    },
    {
      path:'/statistics',
      element:<Statistics></Statistics>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    },
    


  ]
}


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
