type keyStorage = 'crf_tk' | 'lang';

export default class storageUtils {
  static get(k: keyStorage): string | null {
    try {
      return JSON.parse(localStorage.getItem(k) ?? '');
    } catch (e) {
      return null;
    }
  }

  static set(k: keyStorage, v: any): void {
    localStorage.setItem(k, JSON.stringify(v));
  }

  static clear(): void {
    localStorage.clear();
  }

  static remove(k: keyStorage): void {
    localStorage.removeItem(k);
  }
}
