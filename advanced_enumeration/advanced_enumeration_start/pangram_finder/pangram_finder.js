class PangramFinder{
  constructor(phrase) {
      this.phrase=phrase;
      this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  }

  alphPhrase(phrase){
// removes punctuation, changes to lower-case, making each letter an element in an array and alphabetising the array elements
    return phrase.replace(/[? _?!]/g,"").toLowerCase().split("").sort()
  };
// this code was in part obtained from "https://blog.anthonycomito.com/answer-the-anagram-interview-question-with-es6-c7621e43596d"

  stringThisArray(array){
    return array.join("");
  }

  isPangram() {
// make the phrase into an array of lower-case alphabetised letters without punctuation
    const letterArray = this.alphPhrase(this.phrase);
// remove duplicate letters from the array
    for (var i = letterArray.length-2; i >= 0; i--) {
      if(letterArray[i] == letterArray[i+1]){
        letterArray.splice(i,1);
      };
    };
// make the array an single string
    const alphaString = this.stringThisArray(letterArray);
// comparing the string to the alphabet
    if (alphaString === this.alphabet){
      return true;
    }
    return false;
  };
}

module.exports = PangramFinder;
