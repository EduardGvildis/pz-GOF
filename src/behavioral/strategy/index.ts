// Патерн Стратегія (Strategy Pattern)
// Визначає сімейство алгоритмів сортування, інкапсулює кожен з них
// і робить їх взаємозамінними

/**
 * Інтерфейс стратегії сортування
 */
export interface SortStrategy {
  sort(data: number[]): number[];
}

/**
 * Конкретна стратегія: Сортування бульбашкою
 */
export class BubbleSort implements SortStrategy {
  sort(data: number[]): number[] {
    const arr = [...data]; // Створюємо копію масиву
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Міняємо елементи місцями
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  }
}

/**
 * Конкретна стратегія: Швидке сортування
 */
export class QuickSort implements SortStrategy {
  sort(data: number[]): number[] {
    const arr = [...data]; // Створюємо копію масиву

    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...this.sort(left), pivot, ...this.sort(right)];
  }
}

/**
 * Контекст, що використовує стратегію сортування
 */
export class Sorter {
  private strategy: SortStrategy;

  constructor(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  /**
   * Встановлює нову стратегію сортування
   */
  setStrategy(strategy: SortStrategy): void {
    this.strategy = strategy;
  }

  /**
   * Сортує дані використовуючи поточну стратегію
   */
  sortData(data: number[]): number[] {
    return this.strategy.sort(data);
  }
}