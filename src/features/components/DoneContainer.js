import DoneList from "./DoneList";
import React from 'react';
import ConfettiGenerator from "confetti-js";
import {useEffect} from 'react';


function DoneContainer() {

    useEffect(() => {
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
      
        return () => confetti.clear();
      }, [])
    return (
        <canvas id='my-canvas' >
            <DoneList></DoneList>
            </canvas>
    )
}

export default DoneContainer
