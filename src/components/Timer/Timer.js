import React, {useEffect} from "react";
import {useState} from "react";
import './Timer.css'

const Timer = () => {
    const initialMinute = 15;
    const initialSeconds = 0;
    const [shouldTimerRun, setShouldTimerRun] = useState(true);
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (shouldTimerRun) {

                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    }, [shouldTimerRun, minutes, seconds]);

    const handleButton = () => {
        setShouldTimerRun(!shouldTimerRun);
    }

    return (
        <div className='timer'>
            <span>{minutes} minutes {seconds} seconds</span>
            <div>
                <button style={{backgroundColor: !shouldTimerRun ? 'green' : 'red'}}
                        onClick={handleButton}>{!shouldTimerRun ? "Start" : "Stop"}</button>
            </div>
        </div>
    );
}

export default Timer;