console.log('=== ANTI: Патерн Adapter (ручна адаптація в клієнті) ===');

// Анти-підхід: кожного разу в клієнті вручну адаптуємо сумісність
class EuropeanSocket { voltage = 230; plugType = 'EU'; }

function useAmericanClient(plug: any) {
  // Неправильне рішення: клієнт містить код перетворення для різних типів
  if (plug.plugType === 'EU') {
    // Ручне перетворення перед використанням
    console.log('Converting EU 230V -> US 110V (sim)');
    // ... дублюється в кожному клієнті, якщо їх багато
  }
  console.log('Device powered (sim)');
}

const eu = new EuropeanSocket();
useAmericanClient(eu);

// замість цього краще зробити адаптер і залишити клієнта чистим.
