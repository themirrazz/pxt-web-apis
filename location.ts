// Add your code here
namespace location {
    export const href = "pxt://"+control.deviceName()+"-"+control.deviceSerialNumber()+"/";
    export const protocol = "pxt:";
    export const hash = "";
    export const search = "";
    export const pathname = "/";
    export const host = control.deviceName() + "-" + control.deviceSerialNumber();
}