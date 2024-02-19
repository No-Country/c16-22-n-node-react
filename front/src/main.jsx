import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Homepage from './Homepage.jsx'
import Chat from './Chat.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ChatProvider from './Context/ChatProvider.jsx'

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
  <ChatProvider>
    <RouterProvider router={router} />
  </ChatProvider>
);
