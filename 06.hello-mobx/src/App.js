import { TimerProvider } from './states/timer/timerContext';
import TimerView from './components/timer-view/TimerView';

function App() {
    return (
        <TimerProvider>
            <TimerView />
        </TimerProvider>
    );
}

export default App;