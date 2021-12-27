let container:any = document.getElementById("container");

class Car {
    public make: string;
    

    constructor(make:string)  {
        this.make = make;
    }  

    public getInfo() : string {
        return `Автомобиль марки ${this.make}`;
    }
}

class Skoda extends Car {

    private country: string = "Чехия";
    public model: string;
    public transmission: string;
    public fuel: string;
    public volume: number;

    constructor(model: string, transmission: string, fuel: string, volume: number) {
        super("Skoda");
        this.model = model;
        this.transmission = transmission;
        this.fuel = fuel;
        this.volume = volume;
    }

    public getNewInfo():string {
        let baseInfo: string = super.getInfo();
        return `${baseInfo}. Модель: ${this.model}, коробка: ${this.transmission}, тип топлива: ${this.fuel}, обьем двигателя: ${this.volume}, страна регистрации бренда: ${this.country} `
    }
}

class Toyota extends Car {
    private country: string = "Япония";
    public model: string;
    public transmission: string;
    public fuel: string;
    public volume: number;

    constructor(model: string, transmission: string, fuel: string, volume: number) {
        super("Toyota");
        this.model = model;
        this.transmission = transmission;
        this.fuel = fuel;
        this.volume = volume;
    }

    public getNewInfo():string {
        let baseInfo: string = super.getInfo();
        return `${baseInfo}. Модель: ${this.model}, коробка: ${this.transmission}, тип топлива: ${this.fuel}, обьем двигателя: ${this.volume}, страна регистрации бренда: ${this.country} `
    }
}

class Ford extends Car {
    private country: string = "США";
    public model: string;
    public transmission: string;
    public fuel: string;
    public volume: number;

    constructor(model: string, transmission: string, fuel: string, volume: number) {
        super("Ford");
        this.model = model;
        this.transmission = transmission;
        this.fuel = fuel;
        this.volume = volume;
    }

    public getNewInfo():string {
        let baseInfo: string = super.getInfo();
        return `${baseInfo}. Модель: ${this.model}, коробка: ${this.transmission}, тип топлива: ${this.fuel}, обьем двигателя: ${this.volume}, страна регистрации бренда: ${this.country} `
    }
}

let cars = [];
cars.push(new Skoda("Octavia", "автомат", "бензин", 1600))
cars.push(new Skoda("Kodiaq", "автомат", "бензин", 2000))
cars.push(new Toyota("Corolla", "механика", "бензин", 1400))
cars.push(new Ford("Kuga", "автомат", "дизель", 2500))
cars.push(new Skoda("Fabia", "механика", "бензин", 1000))
cars.push(new Toyota("Rav4", "автомат", "гибрид", 2500))
cars.push(new Ford("Focus", "механика", "дизель", 1500))

cars.forEach(element => {
    console.log(element.getNewInfo());
});