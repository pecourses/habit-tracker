const createHttpError = require('http-errors')
const {
  HABIT_SCHEMA_ON_CREATE,
  HABIT_SCHEMA_ON_UPDATE
} = require('../utils/validationSchemas')

module.exports.validateHabitOnCreate = async (req, res, next) => {
  const { body } = req
  try {
    const validatedHabit = await HABIT_SCHEMA_ON_CREATE.validate(body)
    req.body = validatedHabit
    next()
  } catch (err) {
    next(createHttpError(422, 'Validation Error'))
  }
}

module.exports.validateHabitOnUpdate = async (req, res, next) => {
  const { body } = req
  try {
    const validatedHabit = await HABIT_SCHEMA_ON_UPDATE.validate(body)
    req.body = validatedHabit
    next()
  } catch (err) {
    next(createHttpError(422, 'Validation Error'))
  }
}
