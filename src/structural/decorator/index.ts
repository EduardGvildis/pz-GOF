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
