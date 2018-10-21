const randomNumber = require('random-number');

//const dragons = require('./dragons');
//const dragons = ['cool dragon', 'angry dragon', 'nasty dragon'];

const randomItem = array => {
  const randomIndex = randomNumber({
    min: 0,
    max: array.length - 1,
    integer: true,
  });
  return array[randomIndex];
};

//randomItem(['a', 'b', 'c', 'd']);

const make_dragon = () => {
  const dragon_sizes = ['big', 'medium', 'tiny'];
  const dragon_abilities = ['fire', 'ice', 'lightning'];

  return `${randomItem(dragon_sizes)} ${randomItem(dragon_abilities)} dragon`;
};

const dragon_army = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const enoughDrangonSpawned = Math.random() > 0.75;
        if (!enoughDrangonSpawned) {
          return {
            value: make_dragon(),
            done: false,
          };
        }
        return { done: true };
      },
    };
  },
};

for (const dragon of dragon_army) {
  dragon;
}
