import { useEffect } from 'react'
import { listPolls } from 'services'
import { useContextConsumer } from 'context'

export const usePolls = () => {
  const [, dispatch] = useContextConsumer()

  useEffect(() => {
    const getPolls = async () => {
      dispatch({ type: 'POLL_REQUEST' })
      try {
        const { data } = await listPolls()
        dispatch({ type: 'POLL_SUCCESS', payload: data })
      } catch (error) {
        dispatch({ type: 'POLL_ERROR', payload: error })
      }
    }
    getPolls()
  }, [dispatch])
}
