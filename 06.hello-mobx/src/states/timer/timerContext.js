import { createContext, useContext } from 'react';
import TimerStore from './TimerStore';

const TimerContext = createContext();

// Provider
export const TimerProvider = ({children}) => {
    return (
    <TimerContext.Provider value={new TimerStore}>
        {children}
    </TimerContext.Provider>
    )
}

// useStore
export const useTimerStore = () => useContext(TimerContext)