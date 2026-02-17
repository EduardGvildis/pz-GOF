import {CoffeeDecorator} from "./index";

export class DoubleExpresso extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2;
  }

  description(): string {
    return this.coffee.description() + ', double expresso';
  }
}
