import {Animal, AnimalFactory} from "./index";

export class Cat implements Animal {
  speak(): string {
    return 'Meow!';
  }
}
export class CatFactory extends AnimalFactory {
  createAnimal(): Animal {
    return new Cat();
  }
}
