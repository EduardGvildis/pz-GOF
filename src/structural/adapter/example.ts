import { AmericanPlug, EuropeanSocket, Adapter } from './index';

console.log('=== Патерн Адаптер ===');

// Клієнт очікує AmericanPlug
function usePlug(plug: AmericanPlug): void {
  console.log(plug.plugIn());
}

// У нас є EuropeanSocket
const europeanSocket = new EuropeanSocket();

// Без адаптера: не можна використовувати безпосередньо
// usePlug(europeanSocket); // Error: incompatible

// З адаптером
const adapter = new Adapter(europeanSocket);
usePlug(adapter);

// Без патерна: Змінити код клієнта або адаптованого.
// З патерном: Використовувати адаптер для заповнення прогалини.
