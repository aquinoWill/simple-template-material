import axios from 'config/axios'

const BASE_URL = '/organizations'

export const listOrganizations = () => axios.get(BASE_URL)

export const getOrganization = organizationId => {
  const EDIT_URL = `${BASE_URL}/${organizationId}`
  return axios.get(EDIT_URL)
}
