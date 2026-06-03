import axios from 'axios'

import type { AxiosInstance } from 'axios'
import type { CreateHabitDto, Habit, HabitId, UpdateHabitDto } from '../types'

const BASE_URL = 'http://localhost:5000/api'

const httpClient: AxiosInstance = axios.create({ baseURL: BASE_URL })

export const getHabits = async (): Promise<Habit[]> => {
  const {
    data: { data }
  } = await httpClient.get<{ data: Habit[] }>('/habits')
  return data
}

export const createHabit = async (newHabit: CreateHabitDto): Promise<Habit> => {
  const {
    data: { data }
  } = await httpClient.post<{ data: Habit }>('/habits', newHabit)
  return data
}

export const updateHabit = async (
  id: HabitId,
  updatedHabit: UpdateHabitDto
) => {
  const {
    data: { data }
  } = await httpClient.patch<{ data: Habit }>(`/habits/${id}`, updatedHabit)
  return data
}
export const deleteHabit = async id => {
  await httpClient.delete(`/habits/${id}`)
}
