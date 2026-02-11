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
