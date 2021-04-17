import { useEffect } from 'react'
import { getAlternatives } from 'services'
import { useContextConsumer } from 'context'

export const useAlternatives = (pollId, questionId) => {
  const [state, dispatch] = useContextConsumer()

  useEffect(() => {
    const fetchAlternatives = async () => {
      dispatch({ type: 'ALTERNATIVES_REQUEST' })
      try {
        const { data } = await getAlternatives(pollId, questionId)
        dispatch({ type: 'ALTERNATIVES_SUCCESS', payload: data })
      } catch (error) {
        dispatch({ type: 'ALTERNATIVES_ERROR', payload: error })
      }
    }

    fetchAlternatives()
  }, [dispatch, pollId, questionId])

  return state.alternatives
}
