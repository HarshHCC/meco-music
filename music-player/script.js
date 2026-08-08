const songs = [
  { 
    title: "EX FILES", 
    artist: "SMG", 
    src: "songs/song1.mp3", 
    cover: "https://c.saavncdn.com/712/EX-FILES-Punjabi-2023-20230912180512-500x500.jpg" 
  },
  { 
    title: "G-Shit", 
    artist: "Sidhu Moosewala", 
    src: "songs/song2.mp3", 
    cover: "https://c.saavncdn.com/609/Moosetape-English-2021-20220729071255-500x500.jpg" 
  },
  { 
    title: "DARKHAAST", 
    artist: "Arijit Singh", 
    src: "songs/song3.mp3", 
    cover: "https://c.saavncdn.com/550/Shivaay4-Hindi-2016-500x500.jpg" 
  }
];

document.querySelectorAll('.player-card').forEach((card) => {
  const audio = card.querySelector('.audio-player');
  const playBtn = card.querySelector('.play-btn');
  const playIcon = card.querySelector('.play-icon');
  const prevBtn = card.querySelector('.prev-btn');
  const nextBtn = card.querySelector('.next-btn');
  const shuffleBtn = card.querySelector('.shuffle-btn');
  const repeatBtn = card.querySelector('.repeat-btn');
  const speedBtn = card.querySelector('.speed-btn');
  const volumeBtn = card.querySelector('.volume-btn');
  const volumeBar = card.querySelector('.volume-bar');
  const title = card.querySelector('.song-title');
  const artist = card.querySelector('.song-artist');
  const cover = card.querySelector('.cover-img');
  const recordWrapper = card.querySelector('.record-wrapper');
  const progressBar = card.querySelector('.progress-bar');
  const currentTimeEl = card.querySelector('.current-time');
  const durationTimeEl = card.querySelector('.duration-time');
  const playlistEl = card.querySelector('.playlist');
  const searchInput = card.querySelector('.search-input');
  const searchBtn = card.querySelector('.search-btn');

  let songIndex = parseInt(card.getAttribute('data-song-index')) || 0;
  let isPlaying = false;
  let isShuffle = false;
  let repeatMode = 'off'; // 'off' | 'all' | 'one'
  const speeds = [1, 1.25, 1.5, 2, 0.75];
  let speedIndex = 0;
  let previousVolume = 0.8;

  function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
    
    if (cover) {
      cover.src = song.cover;
      // Automatic fallback if CDN links fail or get hotlink-blocked on file:// protocol
      cover.onerror = () => {
        cover.src = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500";
      };
    }
    
    updatePlaylistHighlight();
  }

  function playSong() {
    isPlaying = true;
    audio.play();
    playIcon.className = 'fas fa-pause play-icon';
    if (recordWrapper) recordWrapper.classList.add('play');
  }

  function pauseSong() {
    isPlaying = false;
    audio.pause();
    playIcon.className = 'fas fa-play play-icon';
    if (recordWrapper) recordWrapper.classList.remove('play');
  }

  function prevSong() {
    if (isShuffle) {
      songIndex = getRandomIndex();
    } else {
      songIndex = (songIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[songIndex]);
    playSong();
  }

  function nextSong() {
    if (isShuffle) {
      songIndex = getRandomIndex();
    } else {
      songIndex = (songIndex + 1) % songs.length;
    }
    loadSong(songs[songIndex]);
    playSong();
  }

  function getRandomIndex() {
    if (songs.length <= 1) return 0;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * songs.length);
    } while (newIndex === songIndex);
    return newIndex;
  }

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  }

  // Play / Pause Toggle
  playBtn.addEventListener('click', () => {
    isPlaying ? pauseSong() : playSong();
  });

  prevBtn.addEventListener('click', prevSong);
  nextBtn.addEventListener('click', nextSong);

  // Shuffle Toggle
  shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active', isShuffle);
  });

  // Repeat Mode Toggle (Off -> Repeat All -> Repeat One -> Off)
  repeatBtn.addEventListener('click', () => {
    if (repeatMode === 'off') {
      repeatMode = 'all';
      repeatBtn.classList.add('active');
      repeatBtn.classList.remove('active-one');
    } else if (repeatMode === 'all') {
      repeatMode = 'one';
      repeatBtn.classList.add('active', 'active-one');
    } else {
      repeatMode = 'off';
      repeatBtn.classList.remove('active', 'active-one');
    }
  });

  // Playback Speed Toggle
  speedBtn.addEventListener('click', () => {
    speedIndex = (speedIndex + 1) % speeds.length;
    const selectedSpeed = speeds[speedIndex];
    audio.playbackRate = selectedSpeed;
    speedBtn.innerText = `${selectedSpeed}x`;
  });

  // Mute / Unmute Toggle
  volumeBtn.addEventListener('click', () => {
    if (audio.muted || audio.volume === 0) {
      audio.muted = false;
      audio.volume = previousVolume || 0.8;
      volumeBar.value = audio.volume;
      volumeBtn.className = 'fas fa-volume-up volume-btn';
    } else {
      previousVolume = audio.volume;
      audio.muted = true;
      audio.volume = 0;
      volumeBar.value = 0;
      volumeBtn.className = 'fas fa-volume-mute volume-btn';
    }
  });

  // Volume Bar
  volumeBar.addEventListener('input', (e) => {
    audio.volume = e.target.value;
    audio.muted = e.target.value == 0;

    if (audio.volume === 0) {
      volumeBtn.className = 'fas fa-volume-mute volume-btn';
    } else if (audio.volume < 0.5) {
      volumeBtn.className = 'fas fa-volume-down volume-btn';
    } else {
      volumeBtn.className = 'fas fa-volume-up volume-btn';
    }
  });

  // Handle Song End
  audio.addEventListener('ended', () => {
    if (repeatMode === 'one') {
      audio.currentTime = 0;
      playSong();
    } else if (repeatMode === 'all') {
      nextSong();
    } else {
      if (songIndex === songs.length - 1 && !isShuffle) {
        pauseSong();
      } else {
        nextSong();
      }
    }
  });

  // Progress Bar updates
  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progressBar.value = progressPercent;
      currentTimeEl.innerText = formatTime(audio.currentTime);
      durationTimeEl.innerText = formatTime(audio.duration);
    }
  });

  progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  });

  // Playlist Rendering & Search Filter
  function renderPlaylist(filterText = '') {
    playlistEl.innerHTML = '';
    const term = filterText.toLowerCase().trim();

    songs.forEach((song, index) => {
      const matchesTitle = song.title.toLowerCase().includes(term);
      const matchesArtist = song.artist.toLowerCase().includes(term);

      if (matchesTitle || matchesArtist) {
        const li = document.createElement('li');
        li.innerText = `${song.title} - ${song.artist}`;
        if (index === songIndex) {
          li.classList.add('active');
        }

        li.addEventListener('click', () => {
          songIndex = index;
          loadSong(songs[songIndex]);
          playSong();
        });

        playlistEl.appendChild(li);
      }
    });
  }

  function updatePlaylistHighlight() {
    const items = playlistEl.querySelectorAll('li');
    items.forEach((item, index) => {
      if (index === songIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => renderPlaylist(e.target.value));
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => renderPlaylist(searchInput.value));
  }

  renderPlaylist();
  loadSong(songs[songIndex]);
});