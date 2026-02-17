import {CoffeeDecorator} from "./index";

export class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1;
  }

  description(): string {
    return this.coffee.description() + ', with sugar';
  }
}
