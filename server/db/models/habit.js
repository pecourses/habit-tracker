const { Model } = require('sequelize')
const { HABIT_FREQUENCIES } = require('../../constants')

module.exports = (sequelize, DataTypes) => {
  class Habit extends Model {}

  Habit.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      frequency: {
        type: DataTypes.ENUM(...HABIT_FREQUENCIES),
        allowNull: false
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      sequelize,
      modelName: 'Habit',
      underscored: true
    }
  )

  return Habit
}
