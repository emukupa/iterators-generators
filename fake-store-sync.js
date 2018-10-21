module.exports = function createStore() {
  const tables = {
    customers: {
      1: { name: 'John' },
      2: { name: 'Mattias' },
      3: { name: 'Kim' },
    },
    food: {
      1: ['cake', 'waffle'],
      2: ['coffee'],
      3: ['apple', 'Carrot'],
    },
  };

  return {
    get: (table, id) => tables[table][id],
  };
};
