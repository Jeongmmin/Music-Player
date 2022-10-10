const albums = [
    'Dawn',
    'Me & You',
    'Electro Boy',
    'Home',
    'Proxy (Original Mix)',
  ],
  trackNames = [
    'Skylike - Dawn',
    'Alex Skrindo - Me & You',
    'Kaaze - Electro Boy',
    'Jordan Schor - Home',
    'Martin Garrix - Proxy',
  ],
  // albumArtworks = ['_1', '_2', '_3', '_4', '_5'],
  trackUrl = [
    'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3',
    'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3',
    'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/3.mp3',
    'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3',
    'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/5.mp3',
  ];

const playerTrack = document.querySelector('.player__pop-area');
const albumArt = document.querySelector('.album-art');
const playAndPause = document.querySelector('.play-pause-button');

let isPlaying = false;

const audio = new Audio(
  'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3'
);

playAndPause.addEventListener('click', playPause);

function playPause() {
  setTimeout(function () {
    audio.paused ? PauseMusic() : playMusic();
  }, 300);
}

function PauseMusic() {
  playerTrack.classList.add('active');
  albumArt.classList.add('active');
  // checkBuffering();
  playAndPause.innerHTML = `<i class="fas fa-pause"></i>`;
  audio.play();
}

function playMusic() {
  playerTrack.classList.remove('active');
  albumArt.classList.remove('active', 'buffering');
  // clearInterval(buffInterval);
  // albumArt.classList.remove('buffering');
  playAndPause.innerHTML = `<i class="fas fa-play"></i>`;
  audio.pause();
}

const nextBtn = document.querySelector('.play-next');

nextBtn.addEventListener('click', nextTrack);

function nextTrack() {
  const albumImage = document.querySelector('img');
  const currentIndex = albumImage.dataset.index;
  console.log(currentIndex);
  const bg = document.querySelector('.bg-artwork');
  console.log(bg);

  bg.style.backgroundImage = `url("${trackUrl[currentIndex+1]}")
  `;
}

// function showHover(event) {
//   seekBarPos = sArea.offset();
//   seekT = event.clientX - seekBarPos.left;
//   seekLoc = audio.duration * (seekT / sArea.outerWidth());

//   sHover.width(seekT);

//   cM = seekLoc / 60;

//   ctMinutes = Math.floor(cM);
//   ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

//   if (ctMinutes < 0 || ctSeconds < 0) return;

//   if (ctMinutes < 0 || ctSeconds < 0) return;

//   if (ctMinutes < 10) ctMinutes = '0' + ctMinutes;
//   if (ctSeconds < 10) ctSeconds = '0' + ctSeconds;

//   if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text('--:--');
//   else insTime.text(ctMinutes + ':' + ctSeconds);

//   insTime.css({ left: seekT, 'margin-left': '-21px' }).fadeIn(0);
// }

//   function hideHover() {
//     sHover.width(0);
//     insTime.text('00:00').css({ left: '0px', 'margin-left': '0px' }).fadeOut(0);
//   }

//   function playFromClickedPos() {
//     audio.currentTime = seekLoc;
//     seekBar.width(seekT);
//     hideHover();
//   }

//   function updateCurrTime() {
//     nTime = new Date();
//     nTime = nTime.getTime();

//     if (!tFlag) {
//       tFlag = true;
//       trackTime.classList.add('active');
//     }

//     curMinutes = Math.floor(audio.currentTime / 60);
//     curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

//     durMinutes = Math.floor(audio.duration / 60);
//     durSeconds = Math.floor(audio.duration - durMinutes * 60);

//     playProgress = (audio.currentTime / audio.duration) * 100;

//     if (curMinutes < 10) curMinutes = '0' + curMinutes;
//     if (curSeconds < 10) curSeconds = '0' + curSeconds;

//     if (durMinutes < 10) durMinutes = '0' + durMinutes;
//     if (durSeconds < 10) durSeconds = '0' + durSeconds;

//     if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text('00:00');
//     else tProgress.text(curMinutes + ':' + curSeconds);

//     if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text('00:00');
//     else tTime.text(durMinutes + ':' + durSeconds);

//     if (
//       isNaN(curMinutes) ||
//       isNaN(curSeconds) ||
//       isNaN(durMinutes) ||
//       isNaN(durSeconds)
//     )
//       trackTime.classList.remove('active');
//     else trackTime.classList.add('active');

//     seekBar.width(playProgress + '%');

//     if (playProgress == 100) {
//       i.attr('class', 'fa fa-play');
//       seekBar.width(0);
//       tProgress.text('00:00');
//       albumArt.classList.remove('buffering');
//       albumArt.classList.remove('active');
//       clearInterval(buffInterval);
//     }
//   }

//   function checkBuffering() {
//     clearInterval(buffInterval);
//     buffInterval = setInterval(function () {
//       if (nTime == 0 || bTime - nTime > 1000)
//         albumArt.classList.add('buffering');
//       else albumArt.classList.remove('buffering');

//       bTime = new Date();
//       bTime = bTime.getTime();
//     }, 100);
//   }

//   function selectTrack(flag) {
//     if (flag == 0 || flag == 1) ++currIndex;
//     else --currIndex;

//     if (currIndex > -1 && currIndex < albumArtworks.length) {
//       if (flag == 0) i.attr('class', 'fa fa-play');
//       else {
//         albumArt.classList.remove('buffering');
//         i.attr('class', 'fa fa-pause');
//       }

//       seekBar.width(0);
//       trackTime.classList.remove('active');
//       tProgress.text('00:00');
//       tTime.text('00:00');

//       currAlbum = albums[currIndex];
//       currTrackName = trackNames[currIndex];
//       currArtwork = albumArtworks[currIndex];

//       audio.src = trackUrl[currIndex];

//       nTime = 0;
//       bTime = new Date();
//       bTime = bTime.getTime();

//       if (flag != 0) {
//         audio.play();
//         playerTrack.classList.add('active');
//         albumArt.classList.add('active');

//         clearInterval(buffInterval);
//         checkBuffering();
//       }

//       albumName.text(currAlbum);
//       trackName.text(currTrackName);
//       albumArt.find('img.active').classList.remove('active');
//       $('#' + currArtwork).classList.add('active');

//       bgArtworkUrl = $('#' + currArtwork).attr('src');

//       bgArtwork.css({ 'background-image': 'url(' + bgArtworkUrl + ')' });
//     } else {
//       if (flag == 0 || flag == 1) --currIndex;
//       else ++currIndex;
//     }
//   }

//   function initPlayer() {
//     audio = new Audio();

//     selectTrack(0);

//     audio.loop = false;

//     playPauseButton.on('click', playPause);

//     sArea.mousemove(function (event) {
//       showHover(event);
//     });

//     sArea.mouseout(hideHover);

//     sArea.on('click', playFromClickedPos);

//     $(audio).on('timeupdate', updateCurrTime);

//     playPreviousTrackButton.on('click', function () {
//       selectTrack(-1);
//     });
//     playNextTrackButton.on('click', function () {
//       selectTrack(1);
//     });
//   }

//   initPlayer();
// // });