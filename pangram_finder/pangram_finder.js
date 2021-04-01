const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = this.phrase = phrase.toLowerCase();
}

// CodeClan solution
PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every(letter => this.phrase.includes(letter));
}

// my solution, uses a for loop and ignored unique methods. Functionally same as above. Works
// PangramFinder.prototype.isPangram = function () {
//   possiblePangram = this.phrase;
//   for (let i = 0; i < this.alphabet.length; i++) {
//     if (possiblePangram.indexOf(this.alphabet[i]) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// Luke's attempt, seriously good but incredibly complex. Does not need this.alphabet in the class declaration as it has an alphabet checker built in
// PangramFinder.prototype.isPangram = function () {
//   return new Set(this.phrase.toUpperCase().replace(/[^A-Z]/g, '')).size === 26;
// }

module.exports = PangramFinder;