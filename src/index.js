"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./book");
let konyvek = [];
let konyv1 = new book_1.Book('Gyűrűk ura', 9);
let konyv2 = new book_1.Book('Hobbit', 11);
let konyv3 = new book_1.Book('Ready Player One', 10);
konyvek.push(konyv1);
konyvek.push(konyv2);
konyvek.push(konyv3);
for (let b of konyvek) {
    console.log(b.toString());
}
for (let b of konyvek) {
    if (b.getRating > 7) {
        console.log(b.toString());
    }
}
