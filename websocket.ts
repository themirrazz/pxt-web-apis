// Add your code here
class WebSocket extends EventTarget {
    constructor(url: string) {
        super()
        this.url = url;
        this.readyState = 0;
        radio.onReceivedString((rs: string) => {
            if (this.readyState === 1) {
                this.dispatchEvent(
                    new MessageEvent(
                        'message',
                        rs
                    )
                )
            }
        });
        radio.onReceivedBuffer((rb: Buffer) => {
            if (this.readyState === 1) {
                this.dispatchEvent(
                    new MessageEvent(
                        'message',
                        rb
                    )
                )
            }
        });
        radio.onReceivedNumber((rn: number) => {
            if (this.readyState === 1) {
                this.dispatchEvent(
                    new MessageEvent(
                        'message',
                        rn
                    )
                )
            }
        });
        control.inBackground(() => {
            // Give time to add listeners
            basic.pause(500);
            let works = false;
            for(let i = 1; i <= 255; i++) {
                if([
                    'ws://localhost:'+i+'/radio/',
                    'wss://localhost:'+i+'/radio/',
                    'WS://localhost:'+i+'/radio/',
                    'WSS://localhost:'+i+'/radio/',
                    'ws://127.0.0.7:' + i + '/radio/',
                    'wss://127.0.0.7:' + i + '/radio/',
                    'WS://127.0.0.7:' + i + '/radio/',
                    'WSS://127.0.0.7:' + i + '/radio/',
                ].indexOf(url) > -1) {
                    radio.setGroup(i);
                    works = true;
                    break;
                }
            }
            if(works) {
                this.readyState = 1;
                this.dispatchEvent(new Event('open'));
            } else {
                this.readyState = 2
                this.dispatchEvent(new Event('error'));
                this.readyState = 3;
            }
        });
    }
    /*public addEventListener(name: string, func: Function) {
        if(name === 'open') {
            if(this.readyState === 1) {
                func(new Event('open'));
            }
        } else if (name === 'error') {
            if (this.readyState === 3) {
                func(new Event('error'));
            }
        } else {
            super.addEventListener(name, func);
        }
    }*/
    public url: string;
    public readyState: number = 3;
    public close(code?: any, reason?: any) {
        if (this.readyState !== 1) {
            throw new DOMException('InvalidStateError', "The websocket is not connected.");
        }
        this.readyState = 2;
        this.dispatchEvent(new Event('close'));
        this.readyState = 3;
    }
    public send(data: string|number|Buffer) {
        if (this.readyState !== 1) {
            throw new DOMException('InvalidStateError', "The websocket is not connected.");
        }
        if(typeof data === 'number') {
            radio.sendNumber(data);
        } else if(typeof data === 'string') {
            radio.sendString(data);
        } else {
            radio.sendBuffer(data);
        }
    }
}