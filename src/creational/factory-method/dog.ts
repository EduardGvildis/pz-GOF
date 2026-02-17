import {Animal, AnimalFactory} from "./index";

export class Dog implements Animal {
  speak(): string {
    return 'Woof!';
  }
}
export class DogFactory extends AnimalFactory {
  createAnimal(): Animal {
    return new Dog();
  }
}
