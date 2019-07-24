import moment from 'moment';
const mockData = [
  {
    '01-2019': [
      {
        id: 1,
        name: 'runing',
        value: '1 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 2,
        name: 'runing',
        value: '2 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 3,
        name: 'runing',
        value: '3 mins',
        date: moment().format('DD/MM/YY')
      }
    ]
  },
  {
    '02-2019': [
      {
        id: 1,
        name: 'runing',
        value: '52 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 2,
        name: 'runing',
        value: '91 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 3,
        name: 'runing',
        value: '10 mins',
        date: moment().format('DD/MM/YY')
      }
    ]
  },
  {
    '03-2019': [
      {
        id: 1,
        name: 'runing',
        value: '55 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 2,
        name: 'runing',
        value: '9 mins',
        date: moment().format('DD/MM/YY')
      }
    ]
  }
];
export { mockData };
