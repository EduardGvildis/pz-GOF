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
