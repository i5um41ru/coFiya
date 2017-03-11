var data = [
  {
  names: ['John', 'Martin'],
  statuses: [false, false],
  projects: [2, 1],
  tasks: [16, 5],
  expected: 'Martin'
  },
  {
  names: ['John', 'Martin'],
  statuses: [false, true],
  projects: [2, 1],
  tasks: [6, 5],
  expected: 'John'
  },
  {
  names: ['John', 'Martin'],
  statuses: [false, false],
  projects: [1, 2],
  tasks: [6, 6],
  expected: 'John'
  },
  {
  names: ['John'],
  statuses: [false],
  projects: [10],
  tasks: [10],
  expected: 'John'
  },
  {
  names: ['John', 'Martin', 'Luke'],
  statuses: [false, true, false],
  projects: [1, 0, 2],
  tasks: [2, 0, 1],
  expected: 'Luke'
  },
  {
  names: ['John', 'Martin'],
  statuses: [false, false],
  projects: [10, 9],
  tasks: [10, 9],
  expected: 'Martin'
  }
]

module.exports = data;
