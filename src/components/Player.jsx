import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackwardStep,
  faForwardStep,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
import { formatTime } from '../utils';

function Player({
  audioRef,
  playStatus,
  setPlayStatus,
  currentTime,
  duration,
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

  return (
    <StyledPlayer>
      <div className='time-control'>
        <div className='start-time'>{formatTime(currentTime)}</div>
        <div className='time-range'>
          <input type='range' />
        </div>
        <div className='end-time'>{formatTime(duration)}</div>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon className='skip-back' icon={faBackwardStep} />
        <FontAwesomeIcon
          className='play'
          icon={playStatus ? faPause : faPlay}
          onClick={playSongHandler}
        />
        <FontAwesomeIcon className='skip-forward' icon={faForwardStep} />
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
`;

export default Player;
