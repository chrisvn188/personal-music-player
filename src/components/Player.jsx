import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackwardStep,
  faForwardStep,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
import { formatTime, checkIndex } from '../utils';

function Player({
  audioRef,
  playStatus,
  setPlayStatus,
  duration,
  currentTime,
  setCurrentTime,
  setCurrentSong,
  songs,
  currentSong,
}) {
  const playSongHandler = () => {
    if (playStatus) {
      audioRef.current.pause();
      setPlayStatus(!playStatus);
    } else {
      audioRef.current.play();
      setPlayStatus(!playStatus);
    }
  };

  const seekTimeHandler = (e) => {
    const timeValue = e.target.value;
    setCurrentTime(timeValue);
    audioRef.current.currentTime = timeValue;
  };

  const skipSongHandler = (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (direction === 'skip-backward') {
      const prevIndex = checkIndex(songs, currentIndex - 1);
      setCurrentSong(songs[prevIndex]);
      setPlayStatus(true);
    }

    if (direction === 'skip-forward') {
      const nextIndex = checkIndex(songs, currentIndex + 1);
      setCurrentSong(songs[nextIndex]);
      setPlayStatus(true);
    }
  };

  return (
    <StyledPlayer>
      <div className='time-control'>
        <div className='start-time'>{formatTime(currentTime)}</div>
        <div className='time-range'>
          <input
            type='range'
            max={duration}
            min={0}
            value={currentTime}
            onChange={seekTimeHandler}
          />
        </div>
        <div className='end-time'>{formatTime(duration)}</div>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon
          className='skip-back'
          icon={faBackwardStep}
          onClick={() => skipSongHandler('skip-backward')}
        />
        <FontAwesomeIcon
          className='play'
          icon={playStatus ? faPause : faPlay}
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          className='skip-forward'
          icon={faForwardStep}
          onClick={() => skipSongHandler('skip-forward')}
        />
      </div>
    </StyledPlayer>
  );
}

const StyledPlayer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: var(--clr-primary-2);
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  padding: 1rem;
  .time-control {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
  .start-time,
  .end-time {
    width: 5rem;
    display: flex;
    justify-content: center;
  }
  .time-range {
    flex: 1;
    input {
      width: 100%;
      -webkit-appearance: none;
      background-color: transparent;
      cursor: pointer;
      &:focus {
        outline: none;
      }
      /***** Chrome, Safari, Opera, and Edge Chromium *****/
      &:focus::-webkit-slider-thumb {
        border: 1px solid var(--clr-secondary);
        outline: 3px solid var(--clr-secondary);
        outline-offset: 0.125rem;
      }

      /******** Firefox ********/
      &:focus::-moz-range-thumb {
        border: 1px solid var(--clr-secondary);
        outline: 3px solid var(--clr-secondary);
        outline-offset: 0.125rem;
      }
      &::-webkit-slider-runnable-track {
        background-color: var(--clr-primary-1);
        height: 0.5rem;
        border-radius: 1rem;
      }
      &::-moz-range-track {
        background-color: var(--clr-primary-1);
        height: 0.5rem;
        border-radius: 1rem;
      }
      &::-webkit-slider-thumb {
        appearance: none;
        margin-top: -12px; /* Centers thumb on the track */
        background-color: var(--clr-secondary);
        height: 2rem;
        width: 1rem;
      }
      &::-moz-range-thumb {
        border: none; /*Removes extra border that FF applies*/
        border-radius: 0; /*Removes default border-radius that FF applies*/
        background-color: var(--clr-secondary);
        height: 2rem;
        width: 1rem;
      }
    }
  }
  .play-control {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 0 auto;
    padding: 1rem;
  }
  svg {
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    width: 60%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2.5rem 2.5rem 0 0;
  }
`;

export default Player;
