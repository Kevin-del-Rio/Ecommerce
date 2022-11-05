import { useState, useEffect } from "react";

export const useAsync = (asyncfn, dependencies) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  if (!Array.isArray(dependencies)) {
    dependencies = []
  }
  useEffect(() => {

    setLoading(true)

    asyncfn()
      .then(data => {
        setData(data)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [...dependencies])//eslint-disable-line


  return {
    data,
    error,
    loading
  }
}