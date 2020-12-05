import { createContext, useContext } from 'react';
import { autorun, makeAutoObservable } from "mobx"

// store
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

const TimerContext = createContext();


// Provider - for index.js
export const TimerProvider = ({children}) => {
    return (
    <TimerContext.Provider value={new TimerStore}>
        {children}
    </TimerContext.Provider>
    )
}


// useStore - for components
export const useTimerStore = () => useContext(TimerContext)