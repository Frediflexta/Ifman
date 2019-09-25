

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('courses', [
    {
      courseTitle: 'Cost Accountant',
      memberFees: '388781.43',
      nonMemberFees: 'Blevin',
      startDate: '7/15/2019',
      endDate: '11/4/2018',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      courseTitle: 'Junior Executive',
      memberFees: '69183.95',
      nonMemberFees: 'Twiggs',
      startDate: '9/19/2019',
      endDate: '1/28/2019',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      courseTitle: 'Administrative Assistant IV',
      memberFees: '370019.64',
      nonMemberFees: 'Dowsing',
      startDate: '2/25/2019',
      endDate: '3/17/2019',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      courseTitle: 'Recruiter',
      memberFees: '206668.74',
      nonMemberFees: 'Cawson',
      startDate: '11/10/2018',
      endDate: '3/22/2019',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      courseTitle: 'Programmer Analyst I',
      memberFees: '76561.08',
      nonMemberFees: 'Alday',
      startDate: '5/11/2019',
      endDate: '1/5/2019',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      courseTitle: 'Environmental Tech',
      memberFees: '147746.39',
      nonMemberFees: 'Dyshart',
      startDate: '9/20/2019',
      endDate: '8/29/2019',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('courses', null, {}),
};
