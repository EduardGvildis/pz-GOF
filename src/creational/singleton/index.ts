// Патерн Сінглтон
// Забезпечує наявність лише одного екземпляра класу та глобальну точку доступу до нього.

export class LoggerSingleton {
  private static instance: LoggerSingleton | null = null;
  private logs: string[] = [];

  private constructor() {}

  static getInstance(): LoggerSingleton {
    if (LoggerSingleton.instance === null) {
      LoggerSingleton.instance = new LoggerSingleton();
    }
    return LoggerSingleton.instance;
  }

  log(message: string): void {
    const time = new Date().toISOString();
    this.logs.push(`[${time}] ${message}`);
  }

  getLogs(): string[] {
    return this.logs.slice();
  }

  clear(): void {
    this.logs = [];
  }
}

// Експорт для зручності у прикладах
export { LoggerSingleton as Singleton };