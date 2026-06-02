const { Router } = require('express')
const { habitsController } = require('../controllers')
const { validate } = require('../middleware')

const habitsRouter = Router()

habitsRouter
  .route('/')
  .post(validate.validateHabitOnCreate, habitsController.createHabit)
  .get(habitsController.getHabits)

habitsRouter
  .route('/:habitId')
  .get(habitsController.getHabitById)
  .patch(validate.validateHabitOnUpdate, habitsController.updateHabitById)
  .delete(habitsController.deleteHabitById)

module.exports = habitsRouter
