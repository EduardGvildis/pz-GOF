import { WeatherStation, ConsoleDisplay, Alarm } from './index';

console.log('=== Патерн Спостерігач ===');

// Створюємо суб'єкт
const station = new WeatherStation();

// Створюємо спостерігачів
const display1 = new ConsoleDisplay('Display A');
const display2 = new ConsoleDisplay('Display B');
const alarm = new Alarm(30); // спрацьовує при >= 30°C
const alarm12 = new Alarm(-22);
// Підписуємо спостерігачів
station.register(display1);
station.register(display2);
station.register(alarm);
station.register(alarm12)
// Змінюємо стан — всі підписані будуть повідомлені
station.setTemperature(25);
station.setTemperature(31);

// Відписка одного з дисплеїв
station.unregister(display2);

// Лише Display A і Alarm отримають оновлення
station.setTemperature(-22);

// Коментар: без патерна довелося б жорстко викликати оновлення для кожного клієнта
// З патерном — міцна слабка зв'язка, можна додавати/видаляти слухачів під час виконання
