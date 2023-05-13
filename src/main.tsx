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
import { GroupProvider } from './contexts/groupsContext'
import { HistoricProvider } from './contexts/historicContext'
import { MultipliersProvider } from './contexts/multipliers'

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
    <ModalsProvider>
      <UserProvider>
        <ProductProvider>
          <GroupProvider>
            <HistoricProvider>
              <MultipliersProvider>
                <RouterProvider router={router}></RouterProvider>
                <ToastContainer/>
              </MultipliersProvider>
            </HistoricProvider>
          </GroupProvider>
        </ProductProvider>
      </UserProvider>
    </ModalsProvider>
  </React.StrictMode>,
)
