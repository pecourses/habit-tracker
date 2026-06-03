import * as yup from 'yup'
import { HABIT_FREQUENCIES } from '../constants'

import type { ObjectSchema } from 'yup'
import type { CreateHabitDto, HabitFrequency } from '../types'

export const HABIT_VALIDATION_SCHEMA: ObjectSchema<CreateHabitDto> = yup.object(
  {
    title: yup
      .string()
      .min(1, 'Title is too short')
      .max(50, 'Title is too long')
      .required('Input title'),
    frequency: yup
      .mixed<HabitFrequency>()
      .oneOf(HABIT_FREQUENCIES, 'Select frequency')
      .required('Select frequency'),
    isActive: yup.boolean().required()
  }
)

// interface Person extends yup.InferType<typeof personSchema> {}
