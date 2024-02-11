function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty("marks")) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0){
    return 0;
  }
  let avg = this.marks.reduce((sum, value, index, marks) => {
    sum += value;
    if (index === marks.length - 1) {
      return sum / marks.length;
    }
    return sum;
  },0);
  return avg;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}


let student1 = new Student ("Антон", "мужской", 26);
let student2 = new Student ("Олег", "мужской", 26);
let student3 = new Student ("Юля");