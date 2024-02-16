// Задача 1. Печатное издание

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        } else if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задача 2. Библиотека

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }
    
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const findResult = this.books.find((item) => item[type] === value);
        return findResult || null;
    }

    giveBookByName(bookName) {
        const book = this.findBookBy("name", bookName);
        if (!book) return null;
        this.books = this.books.filter((item) => item.name !== bookName);
        return book;
    }
}

//Задача 3. Журнал успеваемости *

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }
    

    // addMark(marks, lesson) {
    //     if (marks >= 2 && marks <= 5) {
    //         if(this.marks[lesson] === undefined) {
    //             this.marks[lesson] = [];
    //         }
    //         return this.marks[lesson].push(mark);
    //     } else {
    //         return console.log("Значение ошибочно");
    //     }
    // }

    addMark(mark, lesson) {
        if(mark >= 2 && mark <= 5) {
            if(this.marks[lesson] === undefined) {
                 this.marks[lesson] = [];
            }
            return this.marks[lesson].push(mark);
        } else {
            return console.log("Оценка несоответствует значениям");
        }
    }

    // getAverageBySubject(lesson) {
    //     if (this.marks[lesson] === undefined) {
    //         return 0;
    //     } else {
    //         let summ = this.marks[lesson].reduce((acc, mark) => acc + mark, 0);
    //         let avg = summ / this.marks[lesson].length;
    //         return avg;
    //     }
    // }
    getAverageBySubject(lesson) {
        if(this.marks[lesson] === undefined) {
            return 0;
        } else {
            let summ = this.marks[lesson].reduce((acc, mark) => acc + mark, 0);
            let avg = summ / this.marks[lesson].length;
            return avg;
        }
    }

    getAverage() {
        let lesson = Object.keys(this.marks);
        let sumAverageMarks = 0;
        let totalLesson = 0;
        for(let subject of lesson) {
            let averageMark = this.getAverageBySubject(subject);
            sumAverageMarks += averageMark;
            totalLesson++;
        }

        if(totalLesson === 0) {
            return 0
        } else {
            return sumAverageMarks / totalLesson;
        }
    }
}