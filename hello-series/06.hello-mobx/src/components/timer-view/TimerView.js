import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useTimerStore } from '../../stores/timerStore';

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
            <h2>TimerView</h2>
            <span>Seconds passed: {timerStore.secondsPassed}</span>
            <div>
                <span>Converted to minutesTime {timerStore.minutesTime}</span>
            </div>
            
        </>
    );
})

export default TimerView;