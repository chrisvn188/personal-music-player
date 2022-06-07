import { useState } from 'react';
import { GlobalStyle, Nav, Library, Song } from './components';
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
    </div>
  );
}

export default App;
