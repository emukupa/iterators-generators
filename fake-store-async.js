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
    get: (table, id) => delay(500).then(() => tables[table][id]),
  };
};
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
