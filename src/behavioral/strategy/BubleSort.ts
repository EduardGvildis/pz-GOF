import {SortStrategy} from "./index";

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
