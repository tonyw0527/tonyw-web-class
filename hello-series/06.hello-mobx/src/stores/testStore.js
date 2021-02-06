import { createContext, useContext } from 'react';
import { autorun, makeAutoObservable } from "mobx"

// store
class TestStore {
    constructor() {
        makeAutoObservable(this)

        // reactions - autorun 함수 사용
        autorun(() => {
            console.log(this.testArrLength);
        })
    }

    // states
    testArr = [];

    // actions
    addArr() {
        this.testArr.push('hi');
    }

    // derivations
    get testArrLength() {
        return this.testArr.length;
    }
}

const TestContext = createContext();


// Provider - for index.js
export const TestProvider = ({children}) => {
    return (
    <TestContext.Provider value={new TestStore}>
        {children}
    </TestContext.Provider>
    )
}


// useStore - for components
export const useTestStore = () => useContext(TestContext)