import { getJwt } from "../services/jwt"
import { Navigate } from "react-router-dom"

export default function LoggedInChecker({ children }) {
  if (!getJwt()) {
    return <Navigate to='/login' />
  }

  return children
}
