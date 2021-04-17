import axios from 'config/axios'

const BASE_URL = '/polls'

export const listPolls = () => axios.get(BASE_URL)

export const getPoll = pollId => {
  const URL = `${BASE_URL}/${pollId}`
  return axios.get(URL)
}

export const createPoll = values => axios.post(BASE_URL, values)

export const updatePoll = ({ pollId, values }) => {
  const URL = `${BASE_URL}/${pollId}`
  return axios.put(URL, values)
}

export const deletePoll = pollId => {
  const URL = `${BASE_URL}/${pollId}`
  return axios.delete(URL)
}
