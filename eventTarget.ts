// Add your code here
class Event {
    constructor(type: string, options?: {
        bubbles?: boolean,
        cancelable?: boolean,
        composed?: boolean
    }) {
        this.type = type;
        if(options) {
            this.bubbles = options.bubbles ? !0 : !1;
            this.cancelable = options.cancelable ? !0 : !1;
            this.composed = options.composed ? !0 : !1;
        }
    }
    public type: string;
    public bubbles: boolean = false;
    public cancelable: boolean = false;
    public composed: boolean = false;
    public cancelBubble: boolean = false;
    public _cancel_instant_bubble_: boolean = false;
    public stopPropagation() {
        this.cancelBubble = true;
    }
    public stopImmediatePropagation() {
        this._cancel_instant_bubble_ = true;
    }
}

class MessageEvent extends Event {
    constructor(type: string, data: string | number | Buffer, options?: {
        bubbles?: boolean,
        cancelable?: boolean,
        composed?: boolean
    }) {
        super(type, options);
        this.data = data;
    }
    public data: string|number|Buffer;
}

class EventTarget {
    constructor() {}
    private __events__:{
        name: string
        callback: Function
    }[] = [];
    public addEventListener(name: string, callback: Function) {
        this.__events__.push({
            name: name,
            callback: callback
        });
    }
    public removeEventListener(name: string, callback: Function) {
        let nEvt: {
            name: string
            callback: Function
        }[] = [];
        this.__events__.forEach(event => {
            if(!(event.name == name && event.callback == callback)) {
                nEvt.push(event);
            }
        });
        this.__events__ = nEvt;
    }
    public dispatchEvent(event: Event) {
        let BackGroundContinue = true;
        (() => {
            if(!BackGroundContinue) {
                return false;
            }
            BackGroundContinue = false;
            let e = this.__events__;
            for(let i = 0; i < e.length; i++) {
                if(e[i].name === event.type) {
                    e[i].callback(event);
                }
                if (event._cancel_instant_bubble_) {
                    break;
                }
            }
            return false;
        })();
        return true;
    }
}