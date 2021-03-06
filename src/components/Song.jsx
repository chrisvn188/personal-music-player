import styled from 'styled-components';

function Song({ currentSong, playStatus }) {
  const { name, artist, cover } = currentSong;
  return (
    <StyledSong spinStatus={playStatus}>
      <div className='disk'>
        <img src={cover} alt={name} />
      </div>
      <div className='song-info'>
        <h2>{name}</h2>
        <h3>{artist}</h3>
      </div>
    </StyledSong>
  );
}

const StyledSong = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  img {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    animation: spin 5s linear infinite
      ${(props) => (props.spinStatus ? 'running' : 'paused')};
  }
  h2 {
    color: var(--clr-secondary);
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1rem;
  }
`;

export default Song;
