import React, { useEffect } from 'react';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

const SecondsCounter = (props) => {
        const [time, setTime] = useState(props.seconds);
        const [timeArr, setArr] = useState([]);
        useEffect(()=> {
            const interval = setInterval(()=>{
                let newTime = time+1;
                setTime(newTime);
                let arr = Array.from(time.toString());
                while(arr.length < 6){
                    arr.unshift(0);
                }
                setArr(arr);
            },1000);
            return () => clearInterval(interval);
        });

        return (<div>
            <ul className='list-group list-group-horizontal' style={{background:"black"}}>
            {timeArr.map((item, index) => <li className='list-group-item fw-bold' style={{background: "black"}} key={index}><h1 style={{fontSize: "72pt", color: "lightgrey"}}>{item}</h1></li>)}
            </ul>
        </div>);
}

SecondsCounter.propTypes = {
    seconds: PropTypes.number,
  };

export default SecondsCounter;

//{(Array.from(time.toString())).map((item, index) => <li className='list-group-item fw-bold'><h1>{item}</h1></li>)}