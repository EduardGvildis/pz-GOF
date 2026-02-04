// Патерн Адаптер
// Перетворює інтерфейс класу в інший інтерфейс, якого очікують клієнти.

// Цільовий інтерфейс
export interface AmericanPlug {
  plugIn(): string;
}

// Адаптований (несумісний інтерфейс)
export class EuropeanSocket {
  connect(): string {
    return 'Connected to European socket (220V)';
  }
}

// Адаптер
export class Adapter implements AmericanPlug {
  private europeanSocket: EuropeanSocket;

  constructor(europeanSocket: EuropeanSocket) {
    this.europeanSocket = europeanSocket;
  }

  plugIn(): string {
    // Адаптувати інтерфейс
    return this.europeanSocket.connect() + ' via adapter (converted to 110V)';
  }
}