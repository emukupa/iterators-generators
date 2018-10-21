//const createSyncStore = require('./fake-store-sync');
//const createAsyncStore = require('./fake-store-async');

function syncCreateStore() {
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
}

function asyncCreateStore() {
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
}
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const syncStore = syncCreateStore();
const asyncStore = asyncCreateStore();

// synchronous
const syncCustomers = {
  [Symbol.iterator]: function() {
    let i = 0;
    return {
      next: function() {
        i++;
        const customer = syncStore.get('customers', i);
        if (!customer) {
          return { done: true };
        }

        customer.foods = syncStore.get('food', i);
        return { value: customer, done: false };
      },
    };
  },
};

// asynchronous
const asyncCustomers = {
  [Symbol.iterator]: function() {
    let i = 0;
    return {
      next: async function() {
        i++;
        const customer = await asyncStore.get('customers', i);
        if (!customer) {
          return { done: true };
        }

        customer.foods = await asyncStore.get('food', i);
        return { value: customer, done: false };
      },
    };
  },
};

/*
for (const customer of syncCustomers) {
  customer
}
*/

(async function() {
  for await (const customer of asyncCustomers) {
    customer;
  }
})();
