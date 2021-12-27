class MyWord {
    private values:string[] = [];

    public add(word: string) : void {
        this.values.push(word);
    }

    *getWords(){
        for (let i = 0; i < this.values.length; i++) {
            let value = this.values[i];
            if (isNaN(Number(value)) == true) {
                yield value;
            } else {
                throw new Error("Введено не слово")
            }
        }
    }
}

let word1 = new MyWord;
let iterable = word1.getWords();


word1.add("apple")
word1.add("peach")
word1.add("orange")
word1.add("23")
word1.add("banana")


for (const value of iterable) {
    console.log(value)
}