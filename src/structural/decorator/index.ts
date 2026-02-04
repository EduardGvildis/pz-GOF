// Патерн Декоратор
// Динамічно додає додаткові обов'язки до об'єкта.

// Інтерфейс компонента
export interface Coffee {
  cost(): number;
  description(): string;
}

// Конкретний компонент
export class SimpleCoffee implements Coffee {
  cost(): number {
    return 5;
  }

  description(): string {
    return 'Simple coffee';
  }
}

// Базовий клас декоратора
export abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  abstract cost(): number;
  abstract description(): string;
}

// Конкретні декоратори
export class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2;
  }

  description(): string {
    return this.coffee.description() + ', with milk';
  }
}

export class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1;
  }

  description(): string {
    return this.coffee.description() + ', with sugar';
  }
}