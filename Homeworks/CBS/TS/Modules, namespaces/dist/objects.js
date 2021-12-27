import { Skoda, Ford, Toyota } from "./classes";
let cars = [];
cars.push(new Skoda("Octavia", "автомат", "бензин", 1600));
cars.push(new Skoda("Kodiaq", "автомат", "бензин", 2000));
cars.push(new Toyota("Corolla", "механика", "бензин", 1400));
cars.push(new Ford("Kuga", "автомат", "дизель", 2500));
cars.push(new Skoda("Fabia", "механика", "бензин", 1000));
cars.push(new Toyota("Rav4", "автомат", "гибрид", 2500));
cars.push(new Ford("Focus", "механика", "дизель", 1500));
cars.forEach(element => {
    console.log(element.getNewInfo());
});
