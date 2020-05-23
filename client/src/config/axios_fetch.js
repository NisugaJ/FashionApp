import React, { useEffect } from "react"
import baseAxios from "./axios"

const useFetch = url => {
  const [response, setResponse] = React.useState(null)
  const [error, setError] = React.useState(null)

  useEffect(() => {
    const FetchData = async () => {
      try {
        setResponse(res.data)
      } catch (error) {
        setError(error)
      }
    }
    FetchData()
  }, [])
  return { response, error }
}

export default useFetch
