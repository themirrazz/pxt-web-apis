// Add your code here
class Storage {
    constructor() { }
    public __data__:{[key: string]: string} = {};
    public setItem(key: string, value: string) {
        this.__data__[key] = value;
    };
    public getItem(key: string):string|undefined {
        return this.__data__[key];
    }
    public removeItem(key:string) {
        delete this.__data__[key];
    }
    public get length() {
        return Object.keys(this.__data__).length;
    }
    public key(id: number) {
        return Object.keys(this.__data__)[id];
    }
    public clear() {
        this.__data__ = {};
    }
}

const localStorage = new Storage();
const sessionStorage = new Storage();