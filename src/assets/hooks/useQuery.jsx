import { useLocation } from "react-router-dom"

useLocation

export function useQuery() {
    return new URLSearchParams(useLocation().search)
  }
  