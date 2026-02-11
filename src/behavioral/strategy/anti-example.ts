console.log('=== ANTI: Патерн Стратегія (анти-підхід) ===');

const data = [3, 1, 4, 1, 5, 9, 2, 6];

// Анти-підхід: обираємо алгоритм через умовні гілки прямо в клієнті
function sortDataInline(data: number[], algorithm: 'bubble' | 'quick'): number[] {
  if (algorithm === 'bubble') {
    // Бульбашкове сортування — реалізовано прямо тут
    const arr = [...data];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    return arr;
  } else {
    // Швидке сортування — теж прямо в клієнті
    const arr = [...data];
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) left.push(arr[i]); else right.push(arr[i]);
    }
    return [...sortDataInline(left, 'quick'), pivot, ...sortDataInline(right, 'quick')];
  }
}

console.log('Bubble (inline):', sortDataInline(data, 'bubble'));
console.log('Quick (inline):', sortDataInline(data, 'quick'));

// це антипатерн тому, що клієнт містить логіку вибору/реалізації
// алгоритмів — важко розширювати і порушує Open/Closed.
