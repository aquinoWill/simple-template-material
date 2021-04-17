import { useEffect } from 'react'
import { listElectors } from 'services'
import { useContextConsumer } from 'context'

export const useElectors = pollId => {
  const [state, dispatch] = useContextConsumer()

  useEffect(() => {
    const fetchElectors = async () => {
      dispatch({ type: 'ELECTORS_REQUEST' })
      try {
        const { data } = await listElectors(pollId)
        dispatch({ type: 'ELECTORS_SUCCESS', payload: data })
      } catch (error) {
        dispatch({ type: 'ELECTORS_ERROR', payload: error })
      }
    }
    fetchElectors()
  }, [dispatch])

  return state.electors
}
