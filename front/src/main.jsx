import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Homepage from './Homepage.jsx'
import Chat from './Chat.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/chat",
    element: <Chat/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
