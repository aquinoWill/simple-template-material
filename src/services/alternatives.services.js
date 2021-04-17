import axios from 'config/axios'

const BASE_URL = '/polls'

export const getAlternatives = (pollId, questionId) => {
  const URL = `${BASE_URL}/${pollId}/questions/${questionId}/alternatives`
  return axios.get(URL)
}

export const createAlternative = (pollId, questionId, values) => {
  const URL = `${BASE_URL}/${pollId}/questions/${questionId}/alternatives`
  return axios.post(URL, values)
}

export const updateAlternative = (pollId, questionId, values, dataForm) => {
  const URL = `${BASE_URL}/${pollId}/questions/${questionId}/alternatives/${dataForm.id}`
  return axios.put(URL, values)
}

export const deleteAlternative = (pollId, questionId, dataForm) => {
  const URL = `${BASE_URL}/${pollId}/questions/${questionId}/alternatives/${dataForm.id}`
  return axios.delete(URL)
}
