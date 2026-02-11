import { LoggerSingleton } from './index';

console.log('=== Патерн Сінглтон ===');

const s1 = LoggerSingleton.getInstance();
s1.log('Перший запис');

const s2 = LoggerSingleton.getInstance();
s2.log('Другий запис');

console.log('s1 === s2:', s1 === s2);
console.log('Logs:', s1.getLogs());

// Без патерну: різні екземпляри логера можуть розпорошувати стан по всьому додатку.
// З патерном: є одна глобальна точка доступу до спільного ресурсу (Logger).