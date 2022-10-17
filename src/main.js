async function loadItems() {
  const response = await fetch('data/data.json');
  const json = await response.json();
  return json.items;
}

// function displayItems(items, e) {
//   let currentIndex = e.target.dataset.index;
//   console.log(items[currentIndex]);
// }



// const albums = [
//     'Dawn',
//     'Me & You',
//     'Electro Boy',
//     'Home',
//     'Proxy (Original Mix)',
//   ],
//   trackNames = [
//     'Skylike - Dawn',
//     'Alex Skrindo - Me & You',
//     'Kaaze - Electro Boy',
//     'Jordan Schor - Home',
//     'Martin Garrix - Proxy',
//   ],
//   albumArtworks = ['_1', '_2', '_3', '_4', '_5'],
//   trackUrl = [
//     'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3',
//     'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3',
//     'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/3.mp3',
//     'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3',
//     'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/5.mp3',
//   ];

const playBtn = document.querySelector('.play-btn');

playBtn.addEventListener('click', () => {
  changeBtnIcon();
  playMusic();
});

const changeBtnIcon = () => {
  const albumArt = document.querySelector('.player-content__album-art');
  const popup = document.querySelector('.player__play-now-track');
  albumArt.classList.toggle('active');
  popup.classList.toggle('active');
};

function displayItems(items, e) {
  let currentIndex = e.target.dataset.index;
  console.log(items[currentIndex]);
}


const prevBtn = document.querySelector('.previous-btn ');
const nextBtn = document.querySelector('.next-btn');

nextBtn.addEventListener('click', () => {
  playMusic(trackUrl[2]);
});

const playMusic = (url) => {
  let music = new Audio(url);
  music.play();
};

loadItems()
  .then((items) => {
    // displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log);
