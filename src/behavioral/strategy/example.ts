import { BubbleSort, QuickSort, Sorter } from './index';

console.log('=== Патерн Стратегія ===');

const data = [3, 1, 4, 1, 5, 9, 2, 6];

// Використання BubbleSort
const sorter = new Sorter(new BubbleSort());
console.log('BubbleSort:', sorter.sortData(data));

// Переключення на QuickSort
sorter.setStrategy(new QuickSort());
console.log('QuickSort:', sorter.sortData(data));