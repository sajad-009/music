let image = document.getElementById("image");
let title = document.getElementById("title");
let name = document.getElementById("name");
let previous = document.getElementById("previous");
let toggler = document.getElementById("toggler");
let next = document.getElementById("next");
let progress = document.getElementById("progress");
let audio = document.getElementById("audio");
let progressBar = document.getElementById("progressBar");
let counter = 0;

let data = [
  {
    music: "Music/Mirom Az E Shar.mp3",
    cover: "images/Mirom Az E Shar.jfif",
    trackName: "Mirom Az E Shar",
    artist: "Fazaei ft Ekhtar",
  },
  {
    music: "Music/1998.mp3",
    cover: "images/1998.jfif",
    trackName: "1998",
    artist: "Rail47 ft Ramin6nass",
  },
  {
    music: "Music/Asnad Rap.mp3",
    cover: "images/Asnad Rap.jfif",
    trackName: "Asnad Rap",
    artist: "Fazaei ft Ekhtar",
  },
  {
    music: "Music/Ay Dade Bi Dad.mp3",
    cover: "images/Ay Dad Bi Dad.jfif",
    trackName: "Ay Dad Bi Dad",
    artist: "Amir ft Loy",
  },
  {
    music: "Music/Bad Vibe.mp3",
    cover: "images/Bad Vibe.jfif",
    trackName: "Bad Vibe",
    artist: "Nikav",
  },
  {
    music: "Music/Criminal.mp3",
    cover: "images/Criminal.jfif",
    trackName: "Criminal",
    artist: "Hipmas",
  },
  {
    music: "Music/Khale Selah.mp3",
    cover: "images/Khale Selah.jfif",
    trackName: "Khale Selah",
    artist: "Amir ft Loy",
  },
  {
    music: "Music/Soul.mp3",
    cover: "images/Soul.jfif",
    trackName: "Soul",
    artist: "Enight",
  },
  {
    music: "Music/The Market.mp3",
    cover: "images/The Market.jfif",
    trackName: "The Market",
    artist: "Enight",
  },
];

function set(numb) {
  audio.pause();
  audio.setAttribute("src", data[numb]["music"]);
  image.style.background = `url('${data[numb]["cover"]}') center/cover`;
  title.innerText = data[numb]["trackName"];
  name.innerText = data[numb]["artist"];
}

set(counter);

next.addEventListener("click", function () {
  toggler.style.background = `url('icons/pause.png') center / cover`;
  if (counter >= data.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  toggler.style.background = `url('icons/play.png') center / cover`;
  set(counter);
});

previous.addEventListener("click", function () {
  toggler.style.background = `url('icons/pause.png') center / cover`;
  if (counter <= 0) {
    counter = data.length - 1;
  } else {
    counter--;
  }
  toggler.style.background = `url('icons/play.png') center / cover`;
  set(counter);
});

toggler.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    toggler.style.background = `url('icons/pause.png') center / cover`;
  } else {
    audio.pause();
    toggler.style.background = `url('icons/play.png') center / cover`;
  }
});

audio.addEventListener("ended", function () {
  counter = (counter + 1) % data.length;
  set(counter);
});

audio.addEventListener("timeupdate", function () {
  let progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
});

progressBar.addEventListener("input", function () {
  let newTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = newTime;
});
