const IsogramFinder = function (word) {
    this.word = word

}

// My effort. Passes two, fails two, can't detect a non-isogram test.
// IsogramFinder.prototype.isIsogram = function() {
//     let lowerWord = this.word.toLowerCase();
//     let letters = lowerWord.split('');
//     for (let i = 0, j = 1; i < letters.length - 1; i++, j++) {
//         if (letters[i] == letters[j]) {
//       return false; 
//     }
//   }
//   return true;
// }

IsogramFinder.prototype.isIsogram = function () {
  return this.word.split('').every(letter => this.isUnique(letter));
}

IsogramFinder.prototype.isUnique = function (letter) {
  return this.word.indexOf(letter) === this.word.lastIndexOf(letter);
}

module.exports = IsogramFinder;
