import uuidV4 from 'uuid/v4';

const fakeDatabase = [
  {
    id: uuidV4(),
    desc: 'Hello There',
    completed: false
  },
  {
    id: uuidV4(),
    desc: 'Call my lawyer',
    completed: true
  },
  {
    id: uuidV4(),
    desc: 'Grocery shopping',
    completed: false
  },
  {
    id: uuidV4(),
    desc: 'Buy a new car',
    completed: false
  },
  {
    id: uuidV4(),
    desc: 'Write post card',
    completed: false
  }
];

const delay = (ms) => {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
};

export const fetchTodos = (filter) => {
  return delay(1000).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase;
      case 'active':
        return fakeDatabase.filter((t) => !t.completed);
      case 'completed':
        return fakeDatabase.filter((t) => t.completed);
      default:
        throw Error(`filter is not a supported filter`);
    }
  });
};
