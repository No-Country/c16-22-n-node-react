import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Chat from '../pages/Chat'
import Professional from "../pages/Professional";
import NotFound from '../pages/NotFound';



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
    path: "/professional/:id",
    element: <Professional />
  },

  {
    path: "*",
    element: <NotFound />
  }
])
