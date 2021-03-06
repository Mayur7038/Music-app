import {  Play } from "./assets/play.jsx";
import {  Pause } from "./assets/pause.jsx";
import { Next } from "./assets/next.jsx";
import {  Prev } from "./assets/prev.jsx";

const AudioControls = ({isPlaying, onPlayPauseClick, onPrevClick,onNextClick}) => (
  <div className="audio-controls">

    <button type="button" className="prev"  aria-label="Previous" onClick={onPrevClick}> <Prev /> </button>

    {isPlaying ? ( <button type="button" className="pause" onClick={() => onPlayPauseClick(false)} aria-label="Pause">
        <Pause /> </button>
    ) :
     (  <button  type="button" className="play"    onClick={() => onPlayPauseClick(true)}  aria-label="Play"> <Play /> </button> )}


    <button  type="button"  className="next" aria-label="Next" onClick={onNextClick}  >   <Next /> </button>
  </div>
);

export default AudioControls;
