import React, {useState, useEffect} from 'react';
import './App.css';

// const previousStatus = (pre) => {
//     const whichStatus = localStorage.getItem(pre) === true ? true : false;
//     return whichStatus
// }
function App() {
    const previousStatus = localStorage.getItem('Light') ? localStorage.getItem('Light') : '' ;
    const [lightOn, setLightOn] = useState(previousStatus);
    
    useEffect(() => {
        localStorage.setItem('Light', lightOn)
    } )

    const status = lightOn ? 'lit' : 'dark';
    const switchToDark = () => {
        setLightOn(!lightOn);
    }
    
    return (
        <div className={`room ${status}`}>
            <h1>Light is {status}</h1>
            <button onClick={switchToDark}>LightSwitch</button>
        </div>
    )
}
export default App