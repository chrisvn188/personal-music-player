import styled from 'styled-components';

function LibrarySong({ song, active, setCurrentSong, songs, setPlayStatus }) {
  const playSelectedSong = () => {
    const currentIndex = songs.findIndex((item) => item.id === song.id);
    setCurrentSong(songs[currentIndex]);
    setPlayStatus(true);
  };

  return (
    <StyledLibrarySong active={active} onClick={playSelectedSong}>
      <img src={song.cover} alt={song.name} />
      <div className='song-info'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </StyledLibrarySong>
  );
}

const StyledLibrarySong = styled.div`
  padding: 1rem 0;
  display: flex;
  gap: 2rem;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.active ? 'var(--clr-primary-1)' : '')};
  img {
    width: 5rem;
    height: 5rem;
  }
  &:hover {
    background-color: var(--clr-primary-1);
  }
  h3 {
    color: var(--clr-secondary);
  }
`;

export default LibrarySong;
