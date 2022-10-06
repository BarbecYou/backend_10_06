import { Book } from './book';

let konyvek : Book[] = [];

let konyv1 : Book = new Book('Gyűrűk ura', 9);
let konyv2 : Book = new Book('Hobbit',11);
let konyv3 : Book = new Book('Ready Player One', 10);

konyvek.push(konyv1);
konyvek.push(konyv2);
konyvek.push(konyv3);

for (let b of konyvek){
    console.log(b.toString());
}

for (let b of konyvek){
    if (b.getRating > 7){
        console.log(b.toString());
    }
}