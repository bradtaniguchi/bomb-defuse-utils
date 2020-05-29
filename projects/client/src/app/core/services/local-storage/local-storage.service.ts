import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private localStorage: Storage | null;
  private readonly DEFAULT_KEY = 'notepadData';
  constructor() {
    // sanity check to verify window exists, to support SSR.
    this.localStorage =
      typeof window !== 'undefined' ? window.localStorage : null;
  }
  /**
   * Returns the data at the given key
   */
  public get(key?: string): any {
    if (!this.localStorage) {
      return null;
    }
    const str = this.localStorage.getItem(key || this.DEFAULT_KEY);
    if (!str) {
      return null;
    }
    return JSON.parse(str);
  }
  /**
   * Saves data to localStorage
   */
  public save(params: {
    /**
     * Serializable data that
     * will be saved to localStorage
     */
    data: any;
    /**
     * The key to save the data at, otherwise saved at:
     * "notepadData"
     */
    key?: string;
  }): void {
    const { data, key } = params;
    if (!this.localStorage) {
      return;
    }
    this.localStorage.setItem(key || this.DEFAULT_KEY, JSON.stringify(data));
  }
}
