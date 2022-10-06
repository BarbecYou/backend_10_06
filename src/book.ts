export class Book{
    private name : string = "";
    private rating : number = 0;

    constructor(name: string, rating: number){
        this.name = name;
        this.setRating = rating;
    }

    public get getName() : string {
        return this.name;
    }
    public get getRating() : number {
        return this.rating;
    }

    public set setName(name: string)  {
        this.name = name;
    }
    public set setRating(rating: number){
        if (rating < 1 || rating > 10){
            this.rating = 0;
            console.log("Hibás értékelés, alapértelmezett érték: 0")
        }else {
            this.rating = rating;
        }
    }

    public toString = (): string => {
        return `${this.name}, értékelés: ${this.rating}/10 `;
    }
}