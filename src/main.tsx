import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserProvider } from './contexts/userContext'
import { ModalsProvider } from './contexts/modalsContext'
import ErrorPage from './error'
import LoginPage from './pages/login'
import { Dashboard } from './pages/dashboard'
import { ProductProvider } from './contexts/productsContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "login",
    element: <LoginPage/>
  },
  {
    path: "dashboard",
    element: <Dashboard/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <UserProvider>
        <ProductProvider>
          <ModalsProvider>
            <RouterProvider router={router}></RouterProvider>
            <ToastContainer/>
          </ModalsProvider>
        </ProductProvider>
      </UserProvider>
  </React.StrictMode>,
)
