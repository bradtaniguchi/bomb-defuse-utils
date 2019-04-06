class Logger {
  public log(...args: any[]) {
    console.log(...args);
  }
  public warn(...args: any[]) {
    console.warn(...args);
  }
  public error(...args: any[]) {
    console.error(...args);
  }
}

export const logger = new Logger();
