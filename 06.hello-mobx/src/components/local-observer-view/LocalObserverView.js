import { autorun } from 'mobx';
import { useLocalObservable, observer } from 'mobx-react-lite';
import { useEffect } from "react"

const LocalObserverView = observer(() => {
    
    // States
    const state = useLocalObservable(() => ({
        testStr: 'local observable',
        testArr: [],
        
        // actions
        addArr() {
            this.testArr.push('local');
        },

        // derivations
        get arrLength() {
            return this.testArr.length;
        },
    }))

    // Side Effects
    useEffect(() => {
        // reactions
        autorun(() => {
            console.log('local');
            console.log(state.arrLength);
        })
    }, []);

    // Views
    return (
        <div>
            <h2>Local Observer View</h2>
            <span>{state.testStr}</span>
            <ul>
            {
                state.testArr.map((item, index) => {
                    return <li key={item+index}>{item}</li>
                })
            }
            </ul>
            <button onClick={() => {
                state.addArr();
            }}>Add</button>
            {state.arrLength}
        </div>
    );
});

export default LocalObserverView;