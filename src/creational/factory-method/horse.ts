import {Animal, AnimalFactory} from "./index";

export class Horses implements Animal {

  speak(): string {
    return 'Brrr!';
  }
}
export class HorseFactory extends AnimalFactory {
  createAnimal(): Animal {
    return new Horses();
  }
}
