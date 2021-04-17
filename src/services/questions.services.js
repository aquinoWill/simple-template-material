import axios from 'config/axios'

const BASE_URL = '/polls'

export const listQuestions = pollId => {
  const URL = `${BASE_URL}/${pollId}/questions`
  return axios.get(URL)
}

export const createQuestions = ({ pollId, values }) => {
  const URL = `${BASE_URL}/${pollId}/questions`
  return axios.post(URL, values)
}

export const updateQuestions = ({ pollId, values, dataForm }) => {
  const URL = `${BASE_URL}/${pollId}/questions/${dataForm.id}`
  return axios.put(URL, values)
}

export const deleteQuestions = ({ pollId, dataForm }) => {
  const URL = `${BASE_URL}/${pollId}/questions/${dataForm.id}`
  return axios.delete(URL)
}
