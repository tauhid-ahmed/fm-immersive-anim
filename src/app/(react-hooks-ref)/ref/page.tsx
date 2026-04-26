'use client'
import {useState, useRef, useEffect} from 'react'

export default function page() {
  const [timer, setTimer] = useState(5);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer(timer =>{
        if(timer <= 1) {
          clearInterval(timerRef.current)
          return 0
        }
         return timer - 1
      })
    }, 1000);

    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

  return (
    <div className="h-[500px] text-center">
      <span className="text-7xl">{timer}</span>
    </div>
  );
};
