import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api'

const httpClient = axios.create({ baseURL: BASE_URL })

export const getHabits = async () => {
  const {
    data: { data }
  } = await httpClient.get('/habits')
  return data
}

export const createHabit = async newHabit => {
  const {
    data: { data }
  } = await httpClient.post('/habits', newHabit)
  return data
}

export const updateHabit = async (id, updatedHabit) => {
  const {
    data: { data }
  } = await httpClient.patch(`/habits/${id}`, updatedHabit)
  return data
}
export const deleteHabit = async id => {
  await httpClient.delete(`/habits/${id}`)
}
