// Add your code here
let clearInterval = function (id: number) {
    setTimeout(clearInterval, id);
}

let setTimeout: any = (function () {
    let st_id = 1;
    let cleared:number[] = [];
    return function (
        func: Function,
        time?: number
    ) {
        if(func === clearInterval) {
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
    };
})();