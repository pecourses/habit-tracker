import type { HABIT_FREQUENCIES } from '../constants'

// Indexed Access Types
export type HabitFrequency = typeof HABIT_FREQUENCIES[number]

// Branded Types (або Nominal Typing)
export type HabitId = number & { readonly __brand: 'HabitId' }

export interface Habit {
  id: number
  title: string
  frequency: HabitFrequency
  isActive: boolean
}

export type CreateHabitDto = Omit<Habit, 'id'>

export type UpdateHabitDto = Partial<Omit<Habit, 'id'>>
