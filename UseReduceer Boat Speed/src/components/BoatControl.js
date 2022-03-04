import React, {useReducer} from "react";

const initialAction = [
    {engine: false, speed: 0, currentGear: 0, distance: 0}
]

function actionsReducer(tasks, action) {
    switch(action.type) {
        case 'start': {
            return [...tasks, {
                engine: true
            }];
        }
        case 'stop': {
            return [...tasks, {
                engine: false,
                currentGear: 0
            }]
        }
        case 'gearUp': {
            if(tasks.engine === true){
            return [...tasks, {
                currentGear: tasks.currentGear + 1
            }]} else {
                alert('Boat engine is off');
            }
        }
        case 'gearDown': {
            if(tasks.engine === true){
            return[...tasks, {
                currentGear: tasks.currentGear -1
            }]} else {
                alert('Boat engine is off');
            }
        }
        case 'speedUp': {
            if(tasks.engine ===true && tasks.currentGear > 0){
                return[...tasks, {
                    speed: tasks.speed + 2
                }]} else {
                    alert('Boat engine is off or gear is too low')
                }
        }
        case 'speedDown': {
            if(tasks.engine === true && tasks.currentGear !== 0){
                return[...tasks, {
                    speed: tasks.speed - 2
                }]} else {
                    alert('Boat engine is off or gear is set to 0')
                }
        }
    }
}
const BoatControl = () => {
    const [action, dispatch] = useReducer(actionsReducer, initialAction);


    return (
        <div>
            <h1>The Boat Control</h1>
             <div>
                 <p>Engine: {action.engine ? 'on' : 'off'}</p>
                 <p>Speed: 0</p>
                 <p>Current Gear: {action.gear}</p>
                 <p>Distance Travelled: 0</p>
             </div>
            <div>
                <div>
                    <button onClick={() => dispatch({type: 'start'})}>Start Engine</button>
                    <button onClick={() => dispatch({type: 'stop'})}>Stop Engine</button>
                </div>
                <div>
                    <button onClick={() => dispatch({type: 'gearUp'})}>Gear Up</button>
                    <button>Gear Down</button>
                </div>
                <div>
                    <button>Increase Speed</button>
                    <button>Decrease Speed</button>
                </div>
                
            </div>
        </div>
    )
}

export default BoatControl;