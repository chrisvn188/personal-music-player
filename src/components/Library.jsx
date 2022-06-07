import styled from 'styled-components';
import LibrarySong from './LibrarySong';

function Library({
  libraryStatus,
  songs,
  currentSong,
  setCurrentSong,
  setPlayStatus,
}) {
  return (
    <StyledLibrary className={libraryStatus ? 'active' : ''}>
      <h2>Library</h2>
      {songs.map((song) => (
        <LibrarySong
          key={song.id}
          song={song}
          active={song.id === currentSong.id}
          currentSong={currentSong}
          songs={songs}
          setCurrentSong={setCurrentSong}
          setPlayStatus={setPlayStatus}
        />
      ))}
    </StyledLibrary>
  );
}

const StyledLibrary = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 8rem 1.5rem 1.5rem 1.5rem;
  width: 100%;
  max-height: 100vh;
  background-color: var(--clr-primary-3);
  transform: translateX(-100%);
  transition: all 0.3s ease-out;
  overflow: auto;
  &.active {
    transform: translateX(0);
  }
  h2 {
    padding-bottom: 1rem;
  }
`;

export default Library;
