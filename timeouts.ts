// Add your code here
let clearInterval = function (id: number) {
    setInterval(clearInterval, id);
}

let clearTimeout = function (id: number) {
    setTimeout(clearTimeout, id);
}

let setInterval: Function = (function () {
    let st_id = 1;
    let cleared: number[] = [];
    return (function (
        func: Function,
        time?: number
    ) {
        if (func === clearInterval) {
            return cleared.push(time);
        }
        let t = time || 1;
        let k = st_id;
        st_id++;
        let f = (function () {
            basic.pause(t);
            if (cleared.indexOf(st_id) < 0) {
                func();
                control.inBackground(f);
            }
        });
        control.inBackground(f);
    });
})();

let setTimeout: Function = (function () {
    let st_id = 1;
    let cleared:number[] = [];
    return (function (
        func: Function,
        time?: number
    ) {
        if (func === clearTimeout) {
            return cleared.push(time);
        }
        let t = time || 1;
        let k = st_id;
        st_id++;
        control.inBackground(function () {
            basic.pause(t);
            if(cleared.indexOf(st_id) < 0) {
                func();
            }
        });
    });
})();