import { useEffect } from 'react'
import { listQuestions } from 'services'
import { useContextConsumer } from 'context'

export const useQuestions = pollId => {
  const [, dispatch] = useContextConsumer()

  useEffect(() => {
    const fetchQuestions = async () => {
      dispatch({ type: 'QUESTIONS_REQUEST' })
      try {
        const { data } = await listQuestions(pollId)
        dispatch({ type: 'QUESTIONS_SUCCESS', payload: data })
      } catch (error) {
        dispatch({ type: 'QUESTIONS_ERROR', payload: error })
      }
    }

    fetchQuestions()
  }, [dispatch, pollId])
}
