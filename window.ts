// Add your code here
let window:{[key: string]: any} = {
    close: function () {
        control.panic(0);
    }
};

const alert = function (text: string) {
    basic.showString(text);
}

const confirm = function (text: string) {
    basic.showString(text);
    basic.pause(100);
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    `)
    let A = input.buttonIsPressed(Button.A);
    let B = input.buttonIsPressed(Button.B);
    while (!A && !B) {
        A = input.buttonIsPressed(Button.A);
        B = input.buttonIsPressed(Button.B);
    }
    if(A) {
        return true;
    } else {
        return false;
    }
}