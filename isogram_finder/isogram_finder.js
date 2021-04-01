const IsogramFinder = function (word) {
    this.word = word

}

// passes two, fails two, can't detect a non-isogram
IsogramFinder.prototype.isIsogram = function() {
    let lowerWord = this.word.toLowerCase();
    let letters = lowerWord.split('');
    for (let i = 0, j = 1; i < letters.length - 1; i++, j++) {
        if (letters[i] == letters[j]) {
      return false; 
    }
  }
  return true;
}

module.exports = IsogramFinder;
