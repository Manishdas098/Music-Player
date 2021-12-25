const img = document.querySelector("img")
const music = document.querySelector("audio");
const play = document.getElementById("play");
const title = document.getElementById("title")
const artist = document.getElementById("artist")
const prev= document.getElementById("prev")
const next = document.getElementById("next")
let progress =document.getElementById("progress")
let total_duration =document.getElementById("duration")
let current_Time = document.getElementById("current_time")
let bc =document.getElementById("ma")
const progress_div= document.getElementById("progress_div")

const songs = [
    {
    name:"music19",
    title:"is Qudar",
    artist:"Darshan rawal ",
    cover:"cover12", 
   },
   {
    name:"music5",
    title:"Dil Samal Ja zara",
    artist:"Kishomar",
    cover:"cover13",  
   },
   {
    name:"music9",
    title:"lorem heyfg fgue",
    artist:"KishoKumar", 
    cover:"cover11", 
   },
   {
    name:"music14",
    title:"basabriya ",
    artist:"arman malik", 
    cover:"cover13", 
   },
   {
    name:"music8",
    title:"Dill samal ja zara",
    artist:"KishoKumar", 
    cover:"cover16", 
   },
   {
    name:"music6",
    title:" dil laga bhi liya ",
    artist:"covere", 
    cover:"cover17", 
   },
   {
    name:"music9",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover19", 
   },
]


let isPlaying= false;

const PlayMusic = ()=>{
    isPlaying= true;
    music.play();
    play.classList.replace("fa-play" , "fa-pause")
    img.classList.add("anime")
bc.classList.add("ba")
    
};
// plause button
const  PauseMusic= ()=>{
    music.pause();
    isPlaying= false;
    play.classList.replace("fa-pause" , "fa-play")
    img.classList.remove("anime")
    bc.classList.remove("ba")
};
play.addEventListener("click", ()=>{
if(isPlaying){
    PauseMusic();

}else{
    PlayMusic();
}
})
// changing music data
const loadSong =(songs)=>{
title.textContent = songs.title;
artist.textContent = songs.artist;
music.src="music/"+songs.name+".mp3";
img.src="images/"+songs.cover+".jpg"
};
// loadSong(songs[2])

songIndex = 0;


const nextSong = () => {
    songIndex=(songIndex +1 ) % songs.length
    loadSong(songs[songIndex]);
    img.classList.add("anime")
    PlayMusic();
    
};
const prevSong = () => {
    songIndex=(songIndex -1  % songs.length) % songs.length
    loadSong(songs[songIndex]);
  
    PlayMusic();
};
// update progress bat
  music.addEventListener("timeupdate" , (event) =>{
      const {currentTime , duration} =event.srcElement;
     
      let progress_time =(currentTime / duration) *100
      progress.style.width=`${progress_time}%`;
    //   update duratin 

let min_duration = Math.floor(duration/60);
let sec_duration = Math.floor(duration % 60);
if (sec_duration < 10){
    sec_duration=`0${sec_duration}`
}
let tot_duration = `${min_duration}:${sec_duration}`;
if(duration){
    total_duration.textContent = `${tot_duration}`;
}
// update sec
let min_currentTime = Math.floor(currentTime/60);
let sec_currentTime = Math.floor(currentTime % 60);
if (sec_currentTime < 10){
    sec_currentTime=`0${sec_currentTime}`
}
let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;

    current_Time.textContent = `${tot_currentTime}`;

  });

  progress_div.addEventListener ("click", (event) =>{
      const {duration }= music ;
      let move_progress =(event.offsetX / event.srcElement.clientWidth) * duration
      music.currentTime = move_progress
      PlayMusic();
  })
  music.addEventListener("ended" , nextSong)
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

