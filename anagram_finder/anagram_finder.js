const AnagramFinder = function (word) {
    this.word = word;

}

// CodeClan solutions, needs a few callbacks
// AnagramFinder.prototype.findAnagrams = function (otherWords) {
//     return otherWords.filter((otherWord) => {
//         return this.isAnagram(otherWord) && this.isDifferentWord(otherWord);
//     });
// }

// AnagramFinder.prototype.isAnagram = function (otherWord) {
//     return this.prepare(this.word) === this.prepare(otherWord);
// }

// AnagramFinder.prototype.isDifferentWord = function (otherWord) {
//     return this.word.toLowerCase() !== otherWord.toLowerCase();
// }

// AnagramFinder.prototype.prepare = function (word) {
//     return word.toLowerCase().split('').sort().join('');
// }

// Luke's solution, single function. Seriously impressive
AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter((word) => {
        if (word === this.word) {
            return
        } else {
        return word.toLowerCase().split('').sort().join() === this.word.toLowerCase().split('').sort().join()}
    });
}


module.exports = AnagramFinder;