class Student {
  constructor(name, score) {
    let temp = 1
    this._name = name
    this._scores = score
    this._finalScore = score.reduce((partialSum, a) => partialSum + a, 0) / score.length
  }
}

export default Student
