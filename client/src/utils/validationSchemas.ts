import * as yup from 'yup'
import { HABIT_FREQUENCIES } from '../constants'

export const HABIT_VALIDATION_SCHEMA = yup.object({
  title: yup
    .string()
    .min(1, 'Title is too short')
    .max(50, 'Title is too long')
    .required('Input title'),
  frequency: yup
    .string()
    .oneOf(HABIT_FREQUENCIES, 'Select frequency')
    .required('Select frequency'),
  isActive: yup.boolean().required()
})
