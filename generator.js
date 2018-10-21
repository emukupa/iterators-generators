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
  [Symbol.iterator]: function*() {
    while (true) {
      const enough_dragons_created = Math.random() > 0.75;
      if (enough_dragons_created) return;
      yield make_dragon();
    }
  },
};

for (const dragon of dragon_army) {
  console.log(dragon);
}
