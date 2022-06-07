import { useState } from 'react';
import { GlobalStyle, Nav, Library, Song, Player } from './components';
import { getSongs } from './data';

function App() {
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songs, setSongs] = useState(getSongs);
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className='App'>
      <GlobalStyle />
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Library libraryStatus={libraryStatus} />
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
