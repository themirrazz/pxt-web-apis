// Add your code here

let clearInterval = function (id: number) {
    chrome.timerClearedIds.interval.push(id);
}

let clearTimeout = function (id: number) {
    chrome.timerClearedIds.timeout.push(id);
}

let setInterval = function (func: Function, time?: number) {
    let t = time || 1;
    let k = chrome.timerId.interval;
    chrome.timerId.interval += 1;
    let f = (function xyz () {
        basic.pause(t);
        if (chrome.timerClearedIds.interval.indexOf(k) < 0) {
            func();
            control.inBackground(f);
        }
    });
    control.inBackground(f);
    return k;
};

let setTimeout = function (func: Function, time?: number) {
    let t = time || 1;
    let k = chrome.timerId.timeout;
    chrome.timerId.timeout += 1;
    let f = (function xyz () {
        basic.pause(t);
        if (chrome.timerClearedIds.timeout.indexOf(k) < 0) {
            func();
        }
    });
    control.inBackground(f);
    return k;
}