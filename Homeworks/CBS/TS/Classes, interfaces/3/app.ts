interface Animal {
    name: string;
    step: number;
    breed?:string;
    movement: string;
    getSteps():void;
    
}

class Cat implements Animal {
    name: string;
    step: number;
    breed?:string;
    movement: string = "ходьба";
    stepLength: number = 0.25; 

    constructor(name:string,step: number, breed?: string) {
        this.step = step;
        this.name = name;
        this.breed = breed;
    } 

    public getSteps(): void {
        console.log(`Кота зовут ${this.name}, он прошел ${this.step} шагов, расстояние: ${this.getDistance()}. Тип передвижения: ${this.movement}. Порода: ${this.getBreed()}`)
    } 

    private getDistance():number {
        return this.step * this.stepLength;
    }

    private getBreed():string {
        if (this.breed == undefined) {
            return "не определена"
        } else {
            return this.breed
        }
    }
}

class Bird implements Animal {
    name: string;
    step: number;
    breed?:string;
    movement: string = "полет";
    wingDistance: number = 1; 

    constructor(name:string,step: number, breed?: string) {
        this.step = step;
        this.name = name;
        this.breed = breed;
    } 

    public getSteps(): void {
        console.log(`Птицу зовут ${this.name}, она сделал ${this.step} взмахов крыльев, расстояние: ${this.getDistance()}. Тип передвижения: ${this.movement}. Порода: ${this.getBreed()}`)
    } 

    private getDistance():number {
        return this.step * this.wingDistance;
    }

    private getBreed():string {
        if (this.breed == undefined) {
            return "не определена"
        } else {
            return this.breed
        }
    }
}

class Fish implements Animal {
    name: string;
    step: number;
    breed?:string;
    movement: string = "плавание";
    swimDistance: number = 0.1; 

    constructor(name:string,step: number, breed?: string) {
        this.step = step;
        this.name = name;
        this.breed = breed;
    } 

    public getSteps(): void {
        console.log(`Рыбу зовут ${this.name}, она сделал ${this.step} передвижений, расстояние: ${this.getDistance()}. Тип передвижения: ${this.movement}. Порода: ${this.getBreed()}`)
    } 

    private getDistance():number {
        return this.step * this.swimDistance;
    }

    private getBreed():string {
        if (this.breed == undefined) {
            return "не определена"
        } else {
            return this.breed
        }
    }
}

let cat1 : Cat = new Cat("Толик", 42, "сиамская")
let cat2 : Cat = new Cat("Мурка", 72, "персидская")
let cat3 : Cat = new Cat("Топа", 162)
let bird1 : Bird = new Bird("Синичка", 20, "синица большая")
let bird2 : Bird = new Bird("Попугай", 35)
let fish1: Fish = new Fish("Рыбка", 1500, "карп речковой")
let fish2: Fish = new Fish("Муся", 200)
cat1.getSteps();
cat2.getSteps();
cat3.getSteps();
bird1.getSteps();
bird2.getSteps();
fish1.getSteps();
fish2.getSteps();