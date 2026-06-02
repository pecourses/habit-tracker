'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date()
    await queryInterface.bulkInsert(
      'habits',
      [
        {
          title: 'Morning run',
          frequency: 'daily',
          is_active: true,
          created_at: now,
          updated_at: now
        },
        {
          title: 'Read 30 minutes',
          frequency: 'daily',
          is_active: true,
          created_at: now,
          updated_at: now
        },
        {
          title: 'Practice guitar',
          frequency: 'weekly',
          is_active: false,
          created_at: now,
          updated_at: now
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('habits', null, {})
  }
}
