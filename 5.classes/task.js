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
        for (let book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
              let bookDelete = this.books[i];
              this.books.splice(i, 1);
              return bookDelete;
            }
        }
        return null;
    }
}

//Задача 3. Журнал успеваемости *

class Student {
    constructor(name) {
        this.name = name;
        this.scores = {};
    }
    

    addMark(scores, lesson) {
        if (scores >= 2 && scores <= 5) {
            if(this.scores[lesson] === undefined) {
                this.scores[lesson] = [];
            }
            return this.scores[lesson].push(scor);
        } else {
            return console.log("Значение ошибочно");
        }
    }

    getAverageBySubject(lesson) {
        if (this.scores[lesson] === undefined) {
            return 0;
        } else {
            let summ = this.scores[lesson].reduce((acc, scor) => acc + scor, 0);
            let avg = summ / this.scores[lesson].length;
            return avg;
        }
    }
}