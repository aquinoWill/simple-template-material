export const QuestionsReducer = ({ questions }, { type, payload = [] }) => {
  switch (type) {
    case 'QUESTIONS_REQUEST':
      return {
        isFetching: true
      }
    case 'QUESTIONS_SUCCESS':
      return {
        data: payload,
        isError: false,
        isFetching: false
      }
    case 'QUESTIONS_ERROR':
      return {
        data: payload,
        isError: true,
        isFetching: false
      }

    default:
      return questions
  }
}

QuestionsReducer.key = 'questions'

QuestionsReducer.initialState = {
  data: [],
  isError: false,
  isFetching: false
}
