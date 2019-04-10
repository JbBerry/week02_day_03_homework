class IsogramFinder{
 constructor(word) {
   this.word=word;
 }

 alphWord(word){
//returns an array of alphabetised lowercase characters
   let letters = word.toLowerCase().split("").sort();
   return letters;
// this code was in part obtained from "https://blog.anthonycomito.com/answer-the-anagram-interview-question-with-es6-c7621e43596d"


 };

  isIsogram() {
    const letters = this.alphWord(this.word)
// check each element of the array, if it is the same as the next, then return false
    for (let i = 0; i < letters.length-1; i++) {
      if(letters[i] == letters[i+1]){
        return false;
        break;
      }
    }
// otherwise return true
    return true;
  };
}


module.exports = IsogramFinder;
