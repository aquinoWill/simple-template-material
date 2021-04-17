import axios from 'config/axios'

const BASE_URL = '/organizations'

export const getOrganizationMembers = organizationId => {
  const EDIT_URL = `${BASE_URL}/${organizationId}/organization_members`
  return axios.get(EDIT_URL)
}
