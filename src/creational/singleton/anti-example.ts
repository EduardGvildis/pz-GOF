console.log('=== ANTI: Неправильне використання Singleton / глобальний мутабельний обʼєкт ===');

// Анти-патерн: експорт глобального мутабельного об'єкта як "сінглтон".
// Проблеми: важко контролювати життєвий цикл, складно замінити в тестах, небажані побічні ефекти.

export const GlobalLogger = {
  logs: [] as string[],
  log(msg: string) {
    this.logs.push(msg);
  }
};

const a = GlobalLogger;
const b = GlobalLogger;
a.log('a: перший запис');
b.log('b: другий запис');

console.log('Same object?', a === b);
console.log('Logs:', GlobalLogger.logs);
console.log('Проблема: такий підхід ускладнює контроль та тестування коду.');
