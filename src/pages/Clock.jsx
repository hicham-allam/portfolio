import { useState, useEffect, useRef } from 'react';
import './clock.css';
//import paraoxinigBeatz from '../assets/ParoxingBeatz - Logobi Type Beat.flac';
import doflamingo from '../assets/doflamingo.mp4';
import clockBcg from '../assets/clock.png';
import clockTikTac from '../assets/tic-tac.mp3';

export default Clock;

function Clock() {
  const [localDate, setLocalDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const dateInterval = setInterval(() => {
      setLocalDate(new Date().toLocaleDateString());
    }, 20*1000);
    return () => clearInterval(dateInterval);
  }, []);

  const refContainer = useRef(null);
  return (<>
    <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800/40">
      <span className="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="size-6 stroke-pink-700 dark:stroke-pink-500"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path></svg>
      </span>
      <div>
        <p className="text-gray-700 dark:text-gray-400">
          <span className="font-medium text-gray-950 dark:text-white">Tom Watson</span> mentioned you in
          <span className="font-medium text-gray-950 dark:text-white">Logo redesign</span>
        </p>
        <time className="mt-1 block text-gray-500" dateTime="9:37">9:37am</time>
      </div>
    </div>
    <div
      ref={refContainer}
      className='clock-container'
      style={{backgroundImage:`url(${clockBcg})`, backgroundPosition:'center', backgroundSize:'100%'}}>
      <ArrowHandHour />
      <ArrowHandMinute />
      <ArrowHandSecond />
      <Timer refContainer={refContainer} />
      <div className='date'>{localDate}</div>
    </div>
    <audio
      id='clock-audio'
      style={{display:'none'}}
      src={clockTikTac /*paraoxinigBeatz*/}
      autoPlay
      loop
    />
  </>);
}

function ArrowHandSecond() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const rotation = time.getSeconds() * 6
  return (
    <div 
      className="arrow-hand second-hand"
      style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
      >
    </div> 
  );
}

function ArrowHandMinute() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const rotation = time.getMinutes() * 6;
  return (
    <div 
    className="arrow-hand minute-hand"
    style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
    >
    </div> 
  );
}

function ArrowHandHour() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const rotation = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;
  
  return (
    <div 
    className="arrow-hand hour-hand"
    style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
    >
  </div>
  );
}

function Timer({refContainer}) {
  const [clock, setClock] = useState(null);
  const videoRef = useRef(null);

  const handleChange = (e) => {
    setClock(e.target.value);
    e.target.style.animation = 'clockGlow 2s ease-in-out infinite alternate';
  };

  const changeRadius = ()=> {
    const radiusInterval = setInterval(()=>{
      const radius = refContainer.current.style.borderRadius?refContainer.current.style.borderRadius:'50%';
      if (radius!='2%') {
        refContainer.current.style.borderRadius = String(parseFloat(radius)-1)+'%';
      } else {
        clearInterval(radiusInterval);
      }
    },30);
  }

  const toogleAudio = (e)=> {
    const audio =  document.querySelector('#clock-audio');
    const isPlaying = !audio.paused && !audio.ended && audio.readyState > 2;
    if (isPlaying) {
      audio.pause();
      e.target.innerHTML = '🔈';
    } else {
      audio.play();
      e.target.innerHTML = '🔊';
    }
  }

  useEffect(()=> {
    const interval = setInterval(()=>{
      const now = new Date();
      now.setHours(now.getHours() + 1); // Add 1 hour
      if (videoRef.current && clock == now.toISOString().substring(11,16)) {
        videoRef.current.play();
        videoRef.current.onplaying = ()=>{
          videoRef.current.style.display = 'block';
          setTimeout(()=> { changeRadius() }, 9*1000);
          document.querySelector('#clock-audio').pause();
        }
        videoRef.current.onended = ()=>{
          videoRef.current.style.display = 'none';
          refContainer.current.style.borderRadius = '50%';
          document.querySelector('#clock-audio').play();
        }
        clearInterval(interval);
      }
    },1000);
    return () => clearInterval(interval);
  }, [clock]);

  return(
      <>
        <input
          id="clock-input"
          className='clock'
          type="time" 
          name="clock-input" 
          onChange={handleChange}
          value={clock || ''}
        />
        <button className='clock-sound-btn' onClick={toogleAudio}>🔉</button>
        <video ref={videoRef}
          id='video'
          src={doflamingo}
          controlsList="nodownload nofullscreen noremoteplayback"
          preload='none'
          style={{display:'none', width:'100%', objectFit:'none'}}>
        </video>
      </>
  );
}