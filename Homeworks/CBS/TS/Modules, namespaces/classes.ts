
import { Car as CarInterface } from "./interfaces"
class Car implements CarInterface {
    public make: string;
    
    constructor(make:string)  {
        this.make = make;
    }  

    public getMake() : string {
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
        let baseInfo: string = super.getMake();
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
        let baseInfo: string = super.getMake();
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
        let baseInfo: string = super.getMake();
        return `${baseInfo}. Модель: ${this.model}, коробка: ${this.transmission}, тип топлива: ${this.fuel}, обьем двигателя: ${this.volume}, страна регистрации бренда: ${this.country} `
    }
}

export {Car, Skoda, Ford, Toyota}