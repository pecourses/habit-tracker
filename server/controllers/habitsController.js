const path = require('node:path')
const createHttpError = require('http-errors')
const { Habit } = require('./../db/models')

module.exports.createHabit = async (req, res, next) => {
  const { body } = req

  try {
    const createdHabit = await Habit.create(body)

    res.status(201).send({ data: createdHabit })
  } catch (error) {
    next(error)
  }
}

module.exports.getHabits = async (req, res, next) => {
  const {
    query: { page = 1, results = 10 }
  } = req

  const limit = results
  const offset = (page - 1) * results

  try {
    const foundHabits = await Habit.findAll({
      limit,
      offset,
      order: ['id'],
      raw: true
    })
    res.status(200).send({ data: foundHabits })
  } catch (error) {
    next(error)
  }
}

module.exports.getHabitById = async (req, res, next) => {
  const {
    params: { habitId }
  } = req

  try {
    const foundHabit = await Habit.findByPk(habitId, {
      raw: true
    })

    if (!foundHabit) {
      return next(createHttpError(404, 'Habit Not Found'))
    }

    res.status(200).send({ data: foundHabit })
  } catch (error) {
    next(error)
  }
}

module.exports.updateHabitById = async (req, res, next) => {
  const {
    body,
    params: { habitId }
  } = req

  try {
    const [, [updatedHabit]] = await Habit.update(body, {
      where: { id: habitId },
      returning: true
    })

    if (!updatedHabit) {
      return next(createHttpError(404, 'Habit Not Found'))
    }

    res.status(200).send({ data: updatedHabit })
  } catch (error) {
    next(error)
  }
}

module.exports.deleteHabitById = async (req, res, next) => {
  const {
    params: { habitId }
  } = req

  try {
    const deletedCount = await Habit.destroy({
      where: { id: habitId }
    })

    if (deletedCount === 0) {
      return next(createHttpError(404, 'Habit Not Found'))
    }

    res.status(204).end()
  } catch (error) {
    next(error)
  }
}
