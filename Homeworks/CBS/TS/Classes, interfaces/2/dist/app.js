var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var container = document.getElementById("container");
var Car = (function () {
    function Car(make) {
        this.make = make;
    }
    Car.prototype.getInfo = function () {
        return "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C \u043C\u0430\u0440\u043A\u0438 " + this.make;
    };
    return Car;
}());
var Skoda = (function (_super) {
    __extends(Skoda, _super);
    function Skoda(model, transmission, fuel, volume) {
        var _this = _super.call(this, "Skoda") || this;
        _this.country = "Чехия";
        _this.model = model;
        _this.transmission = transmission;
        _this.fuel = fuel;
        _this.volume = volume;
        return _this;
    }
    Skoda.prototype.getNewInfo = function () {
        var baseInfo = _super.prototype.getInfo.call(this);
        return baseInfo + ". \u041C\u043E\u0434\u0435\u043B\u044C: " + this.model + ", \u043A\u043E\u0440\u043E\u0431\u043A\u0430: " + this.transmission + ", \u0442\u0438\u043F \u0442\u043E\u043F\u043B\u0438\u0432\u0430: " + this.fuel + ", \u043E\u0431\u044C\u0435\u043C \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: " + this.volume + ", \u0441\u0442\u0440\u0430\u043D\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0431\u0440\u0435\u043D\u0434\u0430: " + this.country + " ";
    };
    return Skoda;
}(Car));
var Toyota = (function (_super) {
    __extends(Toyota, _super);
    function Toyota(model, transmission, fuel, volume) {
        var _this = _super.call(this, "Toyota") || this;
        _this.country = "Япония";
        _this.model = model;
        _this.transmission = transmission;
        _this.fuel = fuel;
        _this.volume = volume;
        return _this;
    }
    Toyota.prototype.getNewInfo = function () {
        var baseInfo = _super.prototype.getInfo.call(this);
        return baseInfo + ". \u041C\u043E\u0434\u0435\u043B\u044C: " + this.model + ", \u043A\u043E\u0440\u043E\u0431\u043A\u0430: " + this.transmission + ", \u0442\u0438\u043F \u0442\u043E\u043F\u043B\u0438\u0432\u0430: " + this.fuel + ", \u043E\u0431\u044C\u0435\u043C \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: " + this.volume + ", \u0441\u0442\u0440\u0430\u043D\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0431\u0440\u0435\u043D\u0434\u0430: " + this.country + " ";
    };
    return Toyota;
}(Car));
var Ford = (function (_super) {
    __extends(Ford, _super);
    function Ford(model, transmission, fuel, volume) {
        var _this = _super.call(this, "Ford") || this;
        _this.country = "США";
        _this.model = model;
        _this.transmission = transmission;
        _this.fuel = fuel;
        _this.volume = volume;
        return _this;
    }
    Ford.prototype.getNewInfo = function () {
        var baseInfo = _super.prototype.getInfo.call(this);
        return baseInfo + ". \u041C\u043E\u0434\u0435\u043B\u044C: " + this.model + ", \u043A\u043E\u0440\u043E\u0431\u043A\u0430: " + this.transmission + ", \u0442\u0438\u043F \u0442\u043E\u043F\u043B\u0438\u0432\u0430: " + this.fuel + ", \u043E\u0431\u044C\u0435\u043C \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: " + this.volume + ", \u0441\u0442\u0440\u0430\u043D\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0431\u0440\u0435\u043D\u0434\u0430: " + this.country + " ";
    };
    return Ford;
}(Car));
var cars = [];
cars.push(new Skoda("Octavia", "автомат", "бензин", 1600));
cars.push(new Skoda("Kodiaq", "автомат", "бензин", 2000));
cars.push(new Toyota("Corolla", "механика", "бензин", 1400));
cars.push(new Ford("Kuga", "автомат", "дизель", 2500));
cars.push(new Skoda("Fabia", "механика", "бензин", 1000));
cars.push(new Toyota("Rav4", "автомат", "гибрид", 2500));
cars.push(new Ford("Focus", "механика", "дизель", 1500));
cars.forEach(function (element) {
    console.log(element.getNewInfo());
});
