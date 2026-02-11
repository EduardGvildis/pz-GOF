console.log('=== ANTI: Патерн Спостерігач (анти-підхід) ===');

// Анти-підхід: жорстке прив'язування до конкретних клієнтів замість списку слухачів
class WeatherStationTight {
  private temperature = 0;
  // Жорстко прописані посилання на клієнтів
  private displayA: any = null;
  private displayB: any = null;

  setDisplayA(d: any) { this.displayA = d; }
  setDisplayB(d: any) { this.displayB = d; }

  setTemperature(t: number) {
    this.temperature = t;
    // Кожне оновлення мусить знати про всі клієнти
    if (this.displayA) this.displayA.show(this.temperature);
    if (this.displayB) this.displayB.show(this.temperature);
  }
}

class DisplayA { show(t: number) { console.log('DisplayA:', t); } }
class DisplayB { show(t: number) { console.log('DisplayB:', t); } }

const s = new WeatherStationTight();
const a = new DisplayA();
const b = new DisplayB();
s.setDisplayA(a);
s.setDisplayB(b);
s.setTemperature(22);

// при кожній зміні списку клієнтів потрібно змінювати клас WeatherStationTight — погано для підтримки.
