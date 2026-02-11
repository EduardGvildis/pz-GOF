console.log('=== ANTI: Патерн Decorator (комбінаційні підкласи) ===');

// Анти-підхід: створюємо підкласи для кожної комбінації доповнень
class SimpleCoffee {
  description(): string { return 'Simple coffee'; }
  cost(): number { return 5; }
}

class CoffeeWithMilk extends SimpleCoffee {
  description(): string { return super.description() + ', with milk'; }
  cost(): number { return super.cost() + 2; }
}

class CoffeeWithSugar extends SimpleCoffee {
  description(): string { return super.description() + ', with sugar'; }
  cost(): number { return super.cost() + 1; }
}

class CoffeeWithMilkAndSugar extends SimpleCoffee {
  description(): string { return super.description() + ', with milk, with sugar'; }
  cost(): number { return super.cost() + 3; }
}

const coffee = new CoffeeWithMilkAndSugar();
console.log(coffee.description(), coffee.cost());

// при зростанні числа опцій кількість підкласів експоненційно зростає — це антипатерн.
