class UpperCaser{

  constructor (words) {
    this.words = words;
  }

  toUpperCase() {
    for (var i = 0; i < this.words.length; i++) {
      this.words[i] = this.words[i].toUpperCase();
    };
    return this.words;
  }

}

module.exports = UpperCaser;
