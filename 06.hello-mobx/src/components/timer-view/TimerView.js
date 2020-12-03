import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useTimerStore } from '../../states/timer/timerContext';

const TimerView = observer(() =>{
    const timerStore = useTimerStore();

    useEffect(() => {
        setInterval(() => {
            timerStore.increaseTimer()
        }, 1000)
        
        return () => {
            
        }
    }, [timerStore]);

    return (
        <>
            <h1>{timerStore.testStr}</h1>
            <span>Seconds passed: {timerStore.secondsPassed}</span>
            <div>
                <span>Converted to minutesTime {timerStore.minutesTime}</span>
            </div>
            
        </>
    );
})

export default TimerView;