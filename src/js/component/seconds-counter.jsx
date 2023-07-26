import React, { useEffect } from 'react';
import { useState } from 'react';

const SecondsCounter = () => {
        const [time, setTime] = useState(0);
        useEffect(()=> {
            const interval = setInterval(()=>{
                let newTime = time+1;
                setTime(newTime);
            },1000);
            return () => clearInterval(interval);
        });
        return (<div>
            <h1>{time}</h1>
        </div>);
}

export default SecondsCounter;