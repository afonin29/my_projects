var Cat = (function () {
    function Cat(name, step, breed) {
        this.movement = "ходьба";
        this.stepLength = 0.25;
        this.step = step;
        this.name = name;
        this.breed = breed;
    }
    Cat.prototype.getSteps = function () {
        console.log("\u041A\u043E\u0442\u0430 \u0437\u043E\u0432\u0443\u0442 " + this.name + ", \u043E\u043D \u043F\u0440\u043E\u0448\u0435\u043B " + this.step + " \u0448\u0430\u0433\u043E\u0432, \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435: " + this.getDistance() + ". \u0422\u0438\u043F \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F: " + this.movement + ". \u041F\u043E\u0440\u043E\u0434\u0430: " + this.getBreed());
    };
    Cat.prototype.getDistance = function () {
        return this.step * this.stepLength;
    };
    Cat.prototype.getBreed = function () {
        if (this.breed == undefined) {
            return "не определена";
        }
        else {
            return this.breed;
        }
    };
    return Cat;
}());
var Bird = (function () {
    function Bird(name, step, breed) {
        this.movement = "полет";
        this.wingDistance = 1;
        this.step = step;
        this.name = name;
        this.breed = breed;
    }
    Bird.prototype.getSteps = function () {
        console.log("\u041F\u0442\u0438\u0446\u0443 \u0437\u043E\u0432\u0443\u0442 " + this.name + ", \u043E\u043D\u0430 \u0441\u0434\u0435\u043B\u0430\u043B " + this.step + " \u0432\u0437\u043C\u0430\u0445\u043E\u0432 \u043A\u0440\u044B\u043B\u044C\u0435\u0432, \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435: " + this.getDistance() + ". \u0422\u0438\u043F \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F: " + this.movement + ". \u041F\u043E\u0440\u043E\u0434\u0430: " + this.getBreed());
    };
    Bird.prototype.getDistance = function () {
        return this.step * this.wingDistance;
    };
    Bird.prototype.getBreed = function () {
        if (this.breed == undefined) {
            return "не определена";
        }
        else {
            return this.breed;
        }
    };
    return Bird;
}());
var Fish = (function () {
    function Fish(name, step, breed) {
        this.movement = "плавание";
        this.swimDistance = 0.1;
        this.step = step;
        this.name = name;
        this.breed = breed;
    }
    Fish.prototype.getSteps = function () {
        console.log("\u0420\u044B\u0431\u0443 \u0437\u043E\u0432\u0443\u0442 " + this.name + ", \u043E\u043D\u0430 \u0441\u0434\u0435\u043B\u0430\u043B " + this.step + " \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0439, \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435: " + this.getDistance() + ". \u0422\u0438\u043F \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F: " + this.movement + ". \u041F\u043E\u0440\u043E\u0434\u0430: " + this.getBreed());
    };
    Fish.prototype.getDistance = function () {
        return this.step * this.swimDistance;
    };
    Fish.prototype.getBreed = function () {
        if (this.breed == undefined) {
            return "не определена";
        }
        else {
            return this.breed;
        }
    };
    return Fish;
}());
var cat1 = new Cat("Толик", 42, "сиамская");
var cat2 = new Cat("Мурка", 72, "персидская");
var cat3 = new Cat("Топа", 162);
var bird1 = new Bird("Синичка", 20, "синица большая");
var bird2 = new Bird("Попугай", 35);
var fish1 = new Fish("Рыбка", 1500, "карп речковой");
var fish2 = new Fish("Муся", 200);
cat1.getSteps();
cat2.getSteps();
cat3.getSteps();
bird1.getSteps();
bird2.getSteps();
fish1.getSteps();
fish2.getSteps();
