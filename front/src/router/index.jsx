import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Chat from '../pages/Chat'
import Professional from "../pages/Professional";


export const router = createBrowserRouter([
  //  ubicar rutas aqui ejemplo:

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <Chat />
  },
  {
    path: "/professional",
    element: <Professional />
  }

  // {
  //     path: "/about",
  //     element: <About />,
  // },
  // {
  //     path: "/blog",
  //     element: <Blog />,
  // },
])