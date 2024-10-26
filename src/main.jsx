import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './layout/Main.jsx';
import Home from './layout/Home.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import GalleryLayout from './layout/GalleryLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
   
     
    ]
  },
  {
    path: "/gallerylayout",
    element: <GalleryLayout></GalleryLayout>,
    children: [
      {
        path: "gallery",
        element: <Gallery></Gallery>
      },
    
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);