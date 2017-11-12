export class Recipe {
    constructor(
        public title: string,
        public ingredients: string[],
        public steps: string[],
        public url: string
    ) { }
}