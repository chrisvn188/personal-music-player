import { useState, useRef } from 'react';
import { GlobalStyle, Nav, Library, Song, Player } from './components';
import { getSongs } from './data';
import { randomNumberInRange } from './utils';

function App() {
  const audioRef = useRef(null);

  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songs] = useState(getSongs);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playAudio = (audioRef) => {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      audioRef.current.play();
    }
  };

  const loadSongDuration = () => {
    setDuration(audioRef.current.duration);
  };

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const autoPlaySong = () => {
    if (playStatus) {
      playAudio(audioRef);
    }
  };

  const playRandomSong = () => {
    const randomIndex = randomNumberInRange(songs.length);
    setCurrentSong(songs[randomIndex]);
    setPlayStatus(true);
  };

  return (
    <div className='App'>
      <GlobalStyle />
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Library
        libraryStatus={libraryStatus}
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setPlayStatus={setPlayStatus}
      />
      <Song currentSong={currentSong} playStatus={playStatus} />
      <Player
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        audioRef={audioRef}
        currentTime={currentTime}
        duration={duration}
        setCurrentTime={setCurrentTime}
        setCurrentSong={setCurrentSong}
        songs={songs}
        currentSong={currentSong}
      />
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={loadSongDuration}
        onTimeUpdate={updateTime}
        onLoadedData={autoPlaySong}
        onEnded={playRandomSong}
      />
    </div>
  );
}

export default App;
