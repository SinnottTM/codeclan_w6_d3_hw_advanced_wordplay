const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  possiblePangram = this.phrase.toLowerCase();
  for (let i = 0; i < this.alphabet.length; i++) {
    if (possiblePangram.indexOf(this.alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
}

// Rough attempt to code with foreach, gave up
// PangramFinder.prototype.isPangram = function () {
//   const possiblePangram = this.phrase.toLowerCase();
//   array.forEach(this.alphabet[i])
//     if(possiblePangram.indexOf(this.alphabet[i]) === -1) {
//     return false;
//   }
//   return true;
// }

module.exports = PangramFinder;