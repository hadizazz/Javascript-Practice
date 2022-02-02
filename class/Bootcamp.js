import Kelas from "./Kelas"
import Student from "./Student"

class Bootcamp {
  constructor(_bootcampName) {
    this._name = _bootcampName
    this._classes = []
    this._graduated = []
  }

  get classes() {
    return this._classes
  }

  get graduated() {
    return this._graduated
  }

  createClass(name, level, instructor) {
    const a = new Kelas(name, level, instructor, [])
    this._classes.push(a)
  }

  register(className, student) {
    const newClass = this._classes.map((aClass) => {
      return aClass._name === className
        ? new Kelas(aClass._name, aClass._level, aClass._instructor, [...aClass._students, student])
        : aClass
    })

    this._classes = newClass
  }

  runBatch() {
    const newClass = this._classes.map((kelas) => {
      return new Kelas(
        kelas._name,
        kelas._level,
        kelas._instructor,
        kelas._students.map((student) => {
          let score = []
          for (let i = 0; i < 4; i++) {
            score.push(Math.floor(Math.random() * (100 - 50 + 1)) + 50)
          }
          return new Student(student._name, score)
        })
      )
    })

    this._graduated = newClass.map((c) => {
      return {
        [`graduated_from_${c._name}`]: {
          participant: c._students.filter((student) => student._finalScore <= 60),
          completed: c._students.filter(
            (student) => student._finalScore > 60 && student._finalScore < 85
          ),
          mastered: c._students.filter((student) => student._finalScore >= 85),
        },
      }
    })
  }
}

const sanber = new Bootcamp("sanber")

sanber.createClass("Laravel", "beginner", "abduh")
sanber.createClass("React", "beginner", "abdul")

let names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"]///2

names.map((nama, index) => {
  let newStud = new Student(nama, [0])
  let kelas = sanber.classes[index % 2]._name
  sanber.register(kelas, newStud)
})
// console.log(sanber.classes)

sanber.runBatch()//

// sanber.classes.forEach((kelas) => {
//   console.log(kelas.graduate())
// })

sanber.graduated.forEach((kelas) => {
  console.log(kelas)
})