import { autorun, makeAutoObservable, trace } from "mobx"

class TimerStore {
    constructor() {
        makeAutoObservable(this)

        // reactions - autorun 함수 사용
        autorun(() => {
            console.log(this.secondsPassed);
        })
    }

    // states
    secondsPassed = 0;
    testStr = '안녕하세요';

    // actions
    increaseTimer() {
        this.secondsPassed += 1
    }

    // derivations
    get minutesTime() {
        return (this.secondsPassed / 60).toFixed(2);
    }
}

export default TimerStore;