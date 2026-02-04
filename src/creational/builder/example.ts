import { PizzaDirector, MargheritaPizzaBuilder } from './index';

console.log('=== Патерн Будівельник ===');

// Створення будівельника та директора
const builder = new MargheritaPizzaBuilder();
const director = new PizzaDirector(builder);

// Конструювання піци
const pizza = director.constructPizza();

console.log(pizza.getDescription());

// Без патерна: Конструктор з багатьма параметрами, важко читати.
// З патерном: Чіткі кроки, легко модифікувати або розширювати.