const yup = require('yup')
const { HABIT_FREQUENCIES } = require('../constants')

module.exports.HABIT_SCHEMA_ON_CREATE = yup.object({
  title: yup
    .string()
    .trim()
    .min(1, 'Title is too short')
    .max(50, 'Title is too long')
    .required('Input title'),
  frequency: yup
    .string()
    .oneOf([...HABIT_FREQUENCIES], 'Select frequency')
    .required('Select frequency'),
  isActive: yup.boolean().required()
})

module.exports.HABIT_SCHEMA_ON_UPDATE = yup.object({
  title: yup
    .string()
    .trim()
    .min(1, 'Title is too short')
    .max(50, 'Title is too long'),
  frequency: yup.string().oneOf(HABIT_FREQUENCIES, 'Select frequency'),
  isActive: yup.boolean()
})

// export type HabitFormValues = yup.InferType<typeof HABIT_VALIDATION_SCHEMA>

// import type { HabitFormValues } from '../types'

// export const HABIT_VALIDATION_SCHEMA = yup.object({
//   title: yup.string().min(1).max(50).required(),
//   frequency: yup.string().oneOf(HABIT_FREQUENCIES).required(),
//   isActive: yup.boolean().required()
// })

// сказати про interface Person extends yup.InferType<typeof personSchema>
// export const HABIT_VALIDATION_SCHEMA: yup.ObjectSchema<HabitFormValues> =
//   yup.object({
//     title: yup
//       .string()
//       .min(1, 'Title is too short')
//       .max(50, 'Title is too long')
//       .required('Input title'),
//     frequency: yup
//       // .string<HabitFrequency>()
//       .mixed<HabitFrequency>()
//       .oneOf([...HABIT_FREQUENCIES], 'Select frequency')
//       .required('Select frequency'),
//     isActive: yup.boolean().required()
//   })
