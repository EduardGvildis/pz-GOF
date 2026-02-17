import {CoffeeDecorator} from "./index";

export class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2;
  }

  description(): string {
    return this.coffee.description() + ', with milk';
  }
}
