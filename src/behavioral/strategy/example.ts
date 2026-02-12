import { Sorter } from './index';
import { QuickSort } from './QuickSorts';
import { BubbleSort}  from "./BubleSort";

console.log('=== Патерн Стратегія ===');

const data = [3, 1, 4, 1, 5, 9, 2, 6];

// Використання BubbleSort
const sorter = new Sorter(new BubbleSort());
console.log('BubbleSort:', sorter.sortData(data));

// Переключення на QuickSorts.ts
sorter.setStrategy(new QuickSort());
console.log('QuickSorts.ts:', sorter.sortData(data));
