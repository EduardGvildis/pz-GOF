import { Coffee, SimpleCoffee, MilkDecorator, SugarDecorator } from './index';

console.log('=== Патерн Декоратор ===');

// Почати з простої кави
let coffee: Coffee = new SimpleCoffee();
console.log(`${coffee.description()}: $${coffee.cost()}`);

// Додати молоко
coffee = new MilkDecorator(coffee);
console.log(`${coffee.description()}: $${coffee.cost()}`);

// Додати цукор
coffee = new SugarDecorator(coffee);
console.log(`${coffee.description()}: $${coffee.cost()}`);

// Без патерна: Багато підкласів для комбінацій (MilkSugarCoffee, тощо).
// З патерном: Гнучка композиція під час виконання.
