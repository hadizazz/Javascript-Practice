class Kelas {
    constructor(name, level, instructor, student) {
      this._name = name
      this._students = student
      this._level = level
      this._instructor = instructor
    }
  
    graduate() {
      return {
        participant: this._students.filter((student) => student._finalScore <= 60),
        completed: this._students.filter(
          (student) => student._finalScore > 60 && student._finalScore < 85
        ),
        mastered: this._students.filter((student) => student._finalScore >= 85),
      }
    }
  }
  
  export default Kelas
  