class NetworkInformation {
    public get effectiveType(): string {
        return "slow-2g";
    };
    public get type(): string {
        return 'bluetooth';
    };
}

enum EffectiveType {
    //% block="slow 2g"
    "slow-2g",
    //% block="2g"
    "2g",
    //% block="3g",
    "3g",
    //% block="4g",
    "4g"
}

// shims
class BatteryManager {
    public get level(): number {
        return 1;
    }
    public get charging(): boolean {
        return true;
    }
    public get chargingTime(): number {
        return 0;
    }
    public get dischargingTime(): number {
        return Infinity;
    }
}

class Clipboard {
    private content:string|null;
    public readText () {
        let self = this;
        return new Promise(function (ack: Function) {
            ack(self.content);
        });
    }
    public writeText(newClipText: string) {
        let self = this;
        return new Promise(function (ack: Function) {
            self.content = newClipText;
            ack(true);
        });
    }
    public read(formats?: any) {
        return new Promise(function (ack: any, err: Function) {
            err(new DOMException('NotAllowedError', "Please use readText instead."))
        });
    }
    public write(data: any) {
        return new Promise(function (ack: any, err: Function) {
            err(new DOMException('NotAllowedError', "Please use writeText instead."))
        });
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace navigator {
    //% block="online"
    export const onLine = true;

    //% block="network info"
    export const connection = new NetworkInformation();

    export const clipboard = new Clipboard();

    export const cookieEnabled = true;
    
    export const deviceMemory = 1;

    export const hardwareConcurrency = 1;
    
    export const language = "en";

    export const languages = ['en-US'];

    export const pdfViewerEnabled = false;

    export const webdriver = false;

    export const appCodeName = 'Mozilla';

    export const doNotTrack = 'unspecified';

    export const platform = 'MbedOS armv7';

    export const appName = "";

    export const appVersion = "";

    export const vendor = "";

    export const vendorSub = "";

    export const userAgent = (
        "Mozilla/5.0 (BBC Micro:bit "
        + control.hardwareVersion() +
        ") AppleWebKit/537.36"
        + " (KHTML, like Gecko) " +
        "Chrome/134.0.0.0 Safari/537.36"
    );

    export function getBattery():Promise {
        return new Promise(function (ack: Function) {
            ack(new BatteryManager());
        });
    }

    export function canShare(data: any):boolean {
        return false;
    }

    export function share(data: any):Promise {
        return new Promise(function (ack: any, err: Function) {
            err(new DOMException('DataError', "An error occurred sharing the data."));
        });
    }

    export function vibrate(): void {
        // to be done
    }

    export function javaEnabled() {
        return false;
    }

    export function taintEnabled() {
        return false;
    }

    export function unregisterProtocolHandler(
        scheme: string,
        url: string
    ): void {
        // no-op
    }

    export function registerProtocolHandler(
        scheme: string,
        url: string
    ): void {
        // no-op
    }

    export function getAutoplayPolicy(type: any, element: any, context: any) {
        // Autoplay should always be allowed
        return 'allowed';
    }
}