import { useContext } from "react"
import { LoginUserContext } from "../contexts/LoginUserContext"

export const useLoginUser = () => {
  const context = useContext(LoginUserContext)
  if (!context) {
    throw new Error('useLoginUser must be used within a LoginUserProvider')
  }
  return context
}
