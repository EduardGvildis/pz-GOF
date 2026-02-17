console.log('=== ANTI: Патерн Factory Method (великий switch / if-else) ===');

// Анти-підхід: фабрика з великим switch, що порушує Open/Closed
class ConsoleLogger { log(m: string) { console.log('Console:', m); } }
class FileLogger { log(m: string) { console.log('File(sim):', m); } }

function createLogger(type: string) {
  // Коли додаємо нові типи, змінюємо цю функцію — погано
  switch (type) {
    case 'console': return new ConsoleLogger();
    case 'file': return new FileLogger();
    default: throw new Error('Unknown logger');
  }
}

const logger = createLogger('console');
logger.log('Test');

// розширення вимагатиме правок у фабриці замість додавання нових класів.

console.log('\n=== GOOD: Інтерфейсно-орієнтований Factory Method ===');

// Краще: чіткий інтерфейс продукту та окремі класи/творці.
// 1) Визначаємо інтерфейс продукту
interface Logger {
  log(message: string): void;
}

// 2) Конкретні реалізації продукту
class ConsoleLogger2 implements Logger {
  log(m: string) { console.log('Console:', m); }
}

class FileLogger2 implements Logger {
  log(m: string) { console.log('File(sim):', m); }
}

// 3) Абстрактний творець (Factory Method)
abstract class LoggerFactory {
  abstract createLogger(): Logger;

  // Опціональна загальна операція, що використовує фабричний метод
  getLoggerAndLog(message: string) {
    const l = this.createLogger();
    l.log(message);
  }
}

// 4) Конкретні творці
class ConsoleLoggerFactory extends LoggerFactory {
  createLogger(): Logger { return new ConsoleLogger2(); }
}

class FileLoggerFactory extends LoggerFactory {
  createLogger(): Logger { return new FileLogger2(); }
}

// 5) Використання: клієнт залежить від абстракцій
const consoleFactory = new ConsoleLoggerFactory();
consoleFactory.getLoggerAndLog('Hello from factory');

// Розширення: щоб додати новий тип логера, достатньо:
// - додати новий клас, що реалізує `Logger`
// - додати новий клас-творець, що наслідує `LoggerFactory` і повертає цей клас
// Без змін існуючих фабрик або клієнтського коду.
