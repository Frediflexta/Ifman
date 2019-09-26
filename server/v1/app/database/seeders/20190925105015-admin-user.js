

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    {
      firstName: 'super',
      lastName: 'admin',
      email: 'victorawotidebe@gmail.com',
      password: 'Male',
      phoneNumber: '586-852-6862',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
