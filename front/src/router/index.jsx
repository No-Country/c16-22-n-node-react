import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { AuthProvider } from "../context/AuthContext";




export const router = createBrowserRouter ([
     //  ubicar rutas aqui ejemplo:

     {
          path: "/",
          element: <Home />,
      },
<AuthProvider>

  
     </AuthProvider>
    // {
    //     path: "/about",
    //     element: <About />,
    // },
    // {
    //     path: "/blog",
    //     element: <Blog />,
    // },
])