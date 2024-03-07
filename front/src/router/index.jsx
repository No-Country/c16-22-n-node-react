import { createBrowserRouter } from "react-router-dom";
import Catalogo from "../components/catalogo/Catalogo";



export const router = createBrowserRouter ([
     //  ubicar rutas aqui ejemplo:

     {
          path: "/",
          element: <Catalogo />,
      },

    // {
    //     path: "/about",
    //     element: <About />,
    // },
    // {
    //     path: "/blog",
    //     element: <Blog />,
    // },
])