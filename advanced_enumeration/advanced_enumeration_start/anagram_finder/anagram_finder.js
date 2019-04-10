class AnagramFinder{

  constructor (startWord) {
    this.startWord = startWord;
  };

  alphWord(word){
// returns a string of lower-case alphabetised letters
    return word.toLowerCase().split("").sort().join("");
// this code was in part obtained from "https://blog.anthonycomito.com/answer-the-anagram-interview-question-with-es6-c7621e43596d"
  };

  findAnagrams(otherWords) {
/* the best way to find an anagram is to:
alphabetically organise all characters in 'startWord'
AND alphabetically organise all characters in the 'otherWords'
THEN compare the alphebetised strings of 'word' and 'otherWords' */
    const alphStartWord = this.alphWord(this.startWord);
// makes startWord into lower case and alphebetised string
    return otherWords.filter((other)=>{
      const alphOther = this.alphWord(other);
// for each in the array of otherWords
      return (other.toLowerCase() != this.startWord.toLowerCase() && alphOther == alphStartWord);
// return if otherWord is not identical to startWord
// AND if the alphebetised words are the same
    });
  }
};

module.exports = AnagramFinder;
