import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'
import UnprotectedShell from './pages/unprotected/Shell/Shell'
import LandingPage from './pages/unprotected/LandingPage/LandingPage'
import Login from './pages/unprotected/Login/Login'
import Signup from './pages/unprotected/Signup/Signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UnprotectedShell />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
])

export default router
