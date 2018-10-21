const some_stuff = () => {
  let iterations = -1;
  const iterator = {
    next: () => {
      iterations++;
      if (iterations === 0) {
        return { value: 'first Iteration', done: false };
      }

      if (iterations === 1) {
        return { value: 'Second Iteration', done: false };
      }

      if (iterations === 2) {
        if (Math.random() > 0.5) {
          return { value: 'Third Iteration', done: false };
        }
      }
      return { done: true };
    },
  };
  return iterator;
};

const iterator = some_stuff();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
