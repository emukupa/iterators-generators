const nums = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const rad = Math.random() > 0.1;
        if (rad) {
          return { value: Math.ceil(Math.random() * 10), done: false };
        }
        return { done: true };
      },
    };
  },
};
for (const num of nums) {
  console.log(num);
}
