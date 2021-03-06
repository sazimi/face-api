const distance = require('euclidean-distance')

class EmotivePoint {
  anger;
  contempt;
  disgust;
  fear;
  happiness;
  neutral;
  sadness;
  surprise;

  constructor({
    anger,
    contempt,
    disgust,
    fear,
    happiness,
    neutral,
    sadness,
    surprise,
  }) {
    this.anger = anger;
    this.contempt = contempt;
    this.disgust = disgust;
    this.fear = fear;
    this.happiness = happiness;
    this.neutral = neutral;
    this.sadness = sadness;
    this.surprise = surprise;
  }

  toArray() {
    return [
      this.anger,
      this.contempt,
      this.disgust,
      this.fear,
      this.happiness,
      this.neutral,
      this.sadness,
      this.surprise,
    ];
  }

  distance(other) {
    let myPoint = this.toArray();
    let otherPoint = other.toArray();
    return distance(myPoint, otherPoint);
  }
}


module.exports = EmotivePoint;