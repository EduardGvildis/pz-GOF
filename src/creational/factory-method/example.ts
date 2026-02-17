import { AnimalFactory } from './index';
import {DogFactory} from './dog'
import {CatFactory} from './cat'
import {HorseFactory} from './horse'

console.log('=== Патерн Фабричний Метод ===');

// Створення фабрик
const dogFactory = new DogFactory();
const catFactory = new CatFactory();
const hourseFactory = new HorseFactory()
// Отримання звуків тварин
console.log('Собака каже:', dogFactory.getAnimalSound());
console.log('Кіт каже:', catFactory.getAnimalSound());
console.log('Кінь каже' , hourseFactory.getAnimalSound())
// Без патерна: Клієнт безпосередньо створював би Dog() або Cat().
// З патерном: Клієнт використовує фабрику, що дозволяє легке розширення (додати BirdFactory).
