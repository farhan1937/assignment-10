import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Compunents/Root/Root.jsx';
import ErrorPage from './Compunents/ErrorPage/ErrorPage.jsx';
import AuthProvider from './Compunents/AuthProvider/AuthProvider.jsx';
import Login from './Compunents/Login/Login.jsx';
import Register from './Compunents/Register/Register.jsx';
import Home from './Compunents/Home/Home.jsx';
import About from './Compunents/About/About.jsx';
import Contact from './Compunents/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
