import { useState, useEffect } from 'react'

/**
 * @param {function} getData
 * @param {additional params for fetch function} params
 * @returns
 */

export const useFetch = (getData, params) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await getData(params)
        setData(result.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    }
    fetchData()
  }, [getData, params])

  return { data, loading, error }
}

export default useFetch
