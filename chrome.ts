// Add your code here
let chrome: {
    timerId: {
        timeout: number,
        interval: 0
    },
    timerClearedIds: {
        timeout: number[],
        interval: number[]
    }
} = {
    timerId: {
        timeout: 0,
        interval: 0
    },
    timerClearedIds: {
        timeout: [],
        interval: []
    }
};