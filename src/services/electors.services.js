import axios from 'config/axios'

const BASE_URL = '/polls'

export const listElectors = pollId => {
  const PATH = `${BASE_URL}/${pollId}/electors`
  return axios.get(PATH)
}

export const createElector = ({ pollId, values }) => {
  const PATH = `${BASE_URL}/${pollId}/electors`
  values.active = true
  values.poll_id = pollId
  return axios.post(PATH, values)
}

export const updateElector = ({ pollId, dataForm, values }) => {
  const PATH = `${BASE_URL}/${pollId}/electors/${dataForm.id}`
  values.active = true
  return axios.put(PATH, values)
}

export const deleteElector = ({ pollId, idElector }) => {
  const PATH = `${BASE_URL}/${pollId}/electors/${idElector}`
  return axios.delete(PATH)
}
