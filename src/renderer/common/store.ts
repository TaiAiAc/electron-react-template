type Obj<Value> = {} & {
  [key: string]: Value | Obj<Value>;
};

class Store {
  private static instance: Store;

  public indexData: { [key: string]: any } = {};

  public proxyData: { [key: string]: { proxy: any; revoke: () => void } } = {};

  static getInstance() {
    if (!Store.instance) Store.instance = new Store();
    return Store.instance;
  }

  constructor() {}

  get<Value>(key: string): Value | undefined {
    if (key === '') {
      console.error('Invalid key, the key can not be a empty string');
      return;
    }

    if (!key.includes('.') && Object.prototype.hasOwnProperty.call(this.indexData, key)) {
      return this.indexData[key] as Value;
    }

    const levels = key.split('.');
    let cur = this.indexData;
    for (const level of levels) {
      if (Object.prototype.hasOwnProperty.call(cur, level)) {
        cur = cur[level] as unknown as Obj<Value>;
      } else {
        return;
      }
    }
    return cur as unknown as Value;
  }

  set<Value>(key: string, value: Value, exists: boolean = false): void {
    if (key === '') {
      console.error('Invalid key, the key can not be a empty string');
      return;
    }

    if (!key.includes('.')) {
      if (Object.prototype.hasOwnProperty.call(this.indexData, key) && exists) {
        console.log(`The key ${key} looks like already exists on obj.`);
      }
      this.indexData[key] = value;
    }

    const levels = key.split('.');
    const lastKey = levels.pop()!;

    let cur = this.indexData;
    for (const level of levels) {
      if (Object.prototype.hasOwnProperty.call(cur, level)) {
        cur = cur[level];
      } else {
        console.error(`Cannot set value because the key ${key} is not exists on obj.`);
        return;
      }
    }

    if (typeof cur !== 'object') {
      console.error(`Invalid key ${key} because the value of this key is not a object.`);
      return;
    }
    if (Object.prototype.hasOwnProperty.call(cur, lastKey) && exists) {
      console.log(`The key ${key} looks like already exists on obj.`);
    }
    cur[lastKey] = value;
  }
}

export default Store.getInstance();