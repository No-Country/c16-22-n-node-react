import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";




export const router = createBrowserRouter([
  //  ubicar rutas aqui ejemplo:

  {
    path: "/",
    element: <Catalogo />,
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
    path: "/reservar/:id",
    element: <Reservar />
  },
  {
    path: "/payment/:id",
    element: <Payment />
  },
  {
    path: "*",
    element: <NotFound />
  }
])
