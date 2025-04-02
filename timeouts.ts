// Add your code here
let clearInterval = function (id: number) { }

let clearTimeout = function (id: number) { }

let setInterval: any = (function () {
    let st_id = 1;
    let cleared: number[] = [];
    clearInterval = function (id: number) {
        cleared.push(id);
    }
    return function (
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
    };
})();

let setTimeout: any = (function () {
    let st_id = 1;
    let cleared:number[] = [];
    clearTimeout = function (id: number) {
        cleared.push(id);
    }
    return function (
        func: Function,
        time?: number
    ) {
        let t = time || 1;
        let k = st_id;
        st_id++;
        control.inBackground(function () {
            basic.pause(t);
            if(cleared.indexOf(st_id) < 0) {
                func();
            }
        });
    };
})();