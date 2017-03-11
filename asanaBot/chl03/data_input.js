var data = [
  { // data #01
  firstDate    : '01/01/2015',
  k            : 2,
  daysOfTheWeek: ['Monday', 'Thursday'],
  n            : 4,
  expected     : ['01/01/2015',
                  '05/01/2015',
                  '15/01/2015',
                  '19/01/2015']
  },
  { // data #02
  firstDate    : '30/05/1995',
  k            : 4,
  daysOfTheWeek: ['Tuesday'],
  n            : 1,
  expected     : ['30/05/1995']
  },
  { // data #03
  firstDate    : '22/02/2020',
  k            : 1,
  daysOfTheWeek: ['Saturday'],
  n            : 2,
  expected     : ['22/02/2020',
                  '29/02/2020']
  },
  { // data #04
  firstDate    : '01/02/2100',
  k            : 4,
  daysOfTheWeek: ['Sunday', 'Monday'],
  n            : 4,
  expected     : ['01/02/2100',
                  '07/02/2100',
                  '01/03/2100',
                  '07/03/2100']
  },
  { // data #05
  firstDate    : '23/02/2000',
  k            : 2,
  daysOfTheWeek: ['Wednesday', 'Friday'],
  n            : 4,
  expected     : ['23/02/2000',
                  '25/02/2000',
                  '08/03/2000',
                  '10/03/2000']
  },
  { // data #06
  firstDate    : '31/12/2999',
  k            : 1,
  daysOfTheWeek: ['Tuesday'],
  n            : 2,
  expected     : ['31/02/2999',
                  '07/01/3000']
  }
]

module.exports = data;
