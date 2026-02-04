// Патерн Будівельник
// Відокремлює конструювання складного об'єкта від його представлення.

// Продукт
export class Pizza {
  private dough: string = '';
  private sauce: string = '';
  private toppings: string[] = [];

  setDough(dough: string): void {
    this.dough = dough;
  }

  setSauce(sauce: string): void {
    this.sauce = sauce;
  }

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  getDescription(): string {
    return `Pizza with ${this.dough} dough, ${this.sauce} sauce, and toppings: ${this.toppings.join(', ')}`;
  }
}

// Інтерфейс будівельника
export interface PizzaBuilder {
  buildDough(): void;
  buildSauce(): void;
  buildToppings(): void;
  getPizza(): Pizza;
}

// Конкретний будівельник
export class MargheritaPizzaBuilder implements PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  buildDough(): void {
    this.pizza.setDough('thin');
  }

  buildSauce(): void {
    this.pizza.setSauce('tomato');
  }

  buildToppings(): void {
    this.pizza.addTopping('mozzarella');
    this.pizza.addTopping('basil');
  }

  getPizza(): Pizza {
    return this.pizza;
  }
}

// Директор
export class PizzaDirector {
  private builder: PizzaBuilder;

  constructor(builder: PizzaBuilder) {
    this.builder = builder;
  }

  constructPizza(): Pizza {
    this.builder.buildDough();
    this.builder.buildSauce();
    this.builder.buildToppings();
    return this.builder.getPizza();
  }
}