import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ClientProvider } from './contexts/clientContext'
import { ModalsProvider } from './contexts/modalsContext'
import ErrorPage from './error'
import LoginPage from './pages/login'
import { RegisterPage } from './pages/register'
import { Dashboard } from './pages/dashboard'

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
    path: "register",
    element: <RegisterPage/>
  },
  {
    path: "dashboard",
    element: <Dashboard/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ClientProvider>
      <ModalsProvider>
        <RouterProvider router={router}></RouterProvider>
      </ModalsProvider>
    </ClientProvider>
  </React.StrictMode>,
)
