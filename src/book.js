"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(name, rating) {
        this.name = "";
        this.rating = 0;
        this.toString = () => {
            return `${this.name}, értékelés: ${this.rating}/10 `;
        };
        this.name = name;
        this.setRating = rating;
    }
    get getName() {
        return this.name;
    }
    get getRating() {
        return this.rating;
    }
    set setName(name) {
        this.name = name;
    }
    set setRating(rating) {
        if (rating < 1 || rating > 10) {
            this.rating = 0;
            console.log("Hibás értékelés, alapértelmezett érték: 0");
        }
        else {
            this.rating = rating;
        }
    }
}
exports.Book = Book;
