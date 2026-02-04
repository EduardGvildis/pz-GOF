// Патерн Фабричний Метод
// Дозволяє підкласам вирішувати, який клас інстанціювати.

// Інтерфейс продукту
export interface Animal {
  speak(): string;
}

// Конкретні продукти
export class Dog implements Animal {
  speak(): string {
    return 'Woof!';
  }
}

export class Cat implements Animal {
  speak(): string {
    return 'Meow!';
  }
}

// Абстрактний клас творця
export abstract class AnimalFactory {
  abstract createAnimal(): Animal;

  // Деяка операція, що використовує фабричний метод
  getAnimalSound(): string {
    const animal = this.createAnimal();
    return animal.speak();
  }
}

// Конкретні творці
export class DogFactory extends AnimalFactory {
  createAnimal(): Animal {
    return new Dog();
  }
}

export class CatFactory extends AnimalFactory {
  createAnimal(): Animal {
    return new Cat();
  }
}