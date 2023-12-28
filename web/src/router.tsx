import { createBrowserRouter } from 'react-router-dom'
import EventPage from './pages/Event/EventPage'
import LandingPage from './pages/Landing/LandingPage'
import Signup from './pages/Signup/SignupPage'
import Login from './pages/Login/LoginPage'
import Feeds from './pages/Feeds/Feeds'
import React from 'react'
import Comparison from './pages/Comparision/Comparison'
import Preferences from './pages/Preferences/Preferences'
import LoggedInChecker from './components/LoggedInChecker'
import ErrorPage from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: '',
        element: <LandingPage />,
      },
    ],
  },
  {
    path: '/feed',
    element: (
      <LoggedInChecker>
        <Feeds />,
      </LoggedInChecker>
    ),
  },
  {
    path: '/events/:id',
    element: (
      <LoggedInChecker>
        <EventPage />
      </LoggedInChecker>
    ),
  },
  {
    path: 'compare/event/:id',
    element: (
      // <LoggedInChecker>
      <Comparison />
      // </LoggedInChecker>
    ),
  },
  {
    path: '/preferences',
    element: (
      <LoggedInChecker>
        <Preferences />,
      </LoggedInChecker>
    ),
  },

  {
    path: '*',
    element: <ErrorPage />
  },
])

export default router
