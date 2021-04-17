import { useEffect } from 'react'
import { getPoll } from 'services'
import { useContextConsumer } from 'context'

export const useGetPoll = pollId => {
  const [, dispatch] = useContextConsumer()

  useEffect(() => {
    const fetchGetPoll = async () => {
      dispatch({ type: 'POLL_REQUEST' })
      try {
        const { data } = await getPoll(pollId)
        dispatch({ type: 'POLL_SUCCESS', payload: data })
      } catch (error) {
        dispatch({ type: 'POLL_ERROR', payload: error })
      }
    }

    fetchGetPoll()
  }, [dispatch, pollId])
}
