import { useTestStore } from '../../stores/testStore';
import { observer } from 'mobx-react-lite';

const TestView = observer(() => {
    const testStore = useTestStore();

    return (
        <div>
            <h2>TestView</h2>
            <h3>{testStore.testArrLength}</h3>
            <ul>
            {
                testStore.testArr.map((item, index) => {
                    return <li key={item+index}>{item}</li>
                })
            }
            </ul>
            <button onClick={() => {
                testStore.addArr();
            }}>Add</button>
        </div>
    );
});

export default TestView;