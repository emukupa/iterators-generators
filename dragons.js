const dragons = ['cool dragon', 'angry dragon', 'nasty dragon'];

const iterator = dragons[Symbol.iterator]();

iterator.next(); /*?*/
for (const dragon of dragons) {
  dragon;
}
module.exports = dragons;
