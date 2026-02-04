import { AnimalFactory, DogFactory, CatFactory } from './index';

console.log('=== Патерн Фабричний Метод ===');

// Створення фабрик
const dogFactory = new DogFactory();
const catFactory = new CatFactory();

// Отримання звуків тварин
console.log('Собака каже:', dogFactory.getAnimalSound());
console.log('Кіт каже:', catFactory.getAnimalSound());

// Без патерна: Клієнт безпосередньо створював би Dog() або Cat().
// З патерном: Клієнт використовує фабрику, що дозволяє легке розширення (додати BirdFactory).
