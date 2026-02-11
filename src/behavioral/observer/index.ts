// Патерн Спостерігач (Observer Pattern)
// Дозволяє об'єктам підписуватися на події іншого об'єкта та отримувати оновлення

/**
 * Інтерфейс спостерігача
 */
export interface Observer {
  update(subject: Subject): void;
}

/**
 * Інтерфейс суб'єкта (об'єкт, за яким спостерігають)
 */
export interface Subject {
  register(observer: Observer): void;
  unregister(observer: Observer): void;
  notify(): void;
}

/**
 * Конкретний суб'єкт: WeatherStation — приклад змінного стану (температура)
 */
export class WeatherStation implements Subject {
  private observers: Set<Observer> = new Set();
  private temperature: number = 0;

  register(observer: Observer): void {
    this.observers.add(observer);
  }

  unregister(observer: Observer): void {
    this.observers.delete(observer);
  }

  notify(): void {
    for (const obs of this.observers) {
      obs.update(this);
    }
  }

  /**
   * Встановити нову температуру і повідомити спостерігачів
   */
  setTemperature(temp: number): void {
    this.temperature = temp;
    this.notify();
  }

  getTemperature(): number {
    return this.temperature;
  }
}

/**
 * Конкретний спостерігач: відображення у консолі
 */
export class ConsoleDisplay implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(subject: Subject): void {
    if (subject instanceof WeatherStation) {
      console.log(`${this.name} — Новa температура: ${subject.getTemperature()}°C`);
    }
  }
}

/**
 * Конкретний спостерігач: тривога при перевищенні порогу
 */
export class Alarm implements Observer {
  private threshold: number;

  constructor(threshold: number) {
    this.threshold = threshold;
  }

  update(subject: Subject): void {
    if (subject instanceof WeatherStation) {
      const t = subject.getTemperature();
      if (t >= this.threshold) {
        console.log(`ALARM: температура ${t}°C перевищила поріг ${this.threshold}°C`);
      }
    }
  }
}
