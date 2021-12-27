class Car {
    constructor(make) {
        this.make = make;
    }
    getMake() {
        return `Автомобиль марки ${this.make}`;
    }
}
class Skoda extends Car {
    constructor(model, transmission, fuel, volume) {
        super("Skoda");
        this.country = "Чехия";
        this.model = model;
        this.transmission = transmission;
        this.fuel = fuel;
        this.volume = volume;
    }
    getNewInfo() {
        let baseInfo = super.getMake();
        return `${baseInfo}. Модель: ${this.model}, коробка: ${this.transmission}, тип топлива: ${this.fuel}, обьем двигателя: ${this.volume}, страна регистрации бренда: ${this.country} `;
    }
}
class Toyota extends Car {
    constructor(model, transmission, fuel, volume) {
        super("Toyota");
        this.country = "Япония";
        this.model = model;
        this.transmission = transmission;
        this.fuel = fuel;
        this.volume = volume;
    }
    getNewInfo() {
        let baseInfo = super.getMake();
        return `${baseInfo}. Модель: ${this.model}, коробка: ${this.transmission}, тип топлива: ${this.fuel}, обьем двигателя: ${this.volume}, страна регистрации бренда: ${this.country} `;
    }
}
class Ford extends Car {
    constructor(model, transmission, fuel, volume) {
        super("Ford");
        this.country = "США";
        this.model = model;
        this.transmission = transmission;
        this.fuel = fuel;
        this.volume = volume;
    }
    getNewInfo() {
        let baseInfo = super.getMake();
        return `${baseInfo}. Модель: ${this.model}, коробка: ${this.transmission}, тип топлива: ${this.fuel}, обьем двигателя: ${this.volume}, страна регистрации бренда: ${this.country} `;
    }
}
export { Car, Skoda, Ford, Toyota };
