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
    name:"music1",
    title:"tujse naraj nahi zindagi",
    artist:"Sanam puri ",
    cover:"cover22", 
   },
   {
    name:"music2",
    title:"dance with me",
    artist:"unknown",
    cover:"music2",  
   },
   {
    name:"music3",
    title:"jimme the bottle",
    artist:"unknown", 
    cover:"cover3", 
   },
   {
    name:"music4",
    title:"dil laga bhi liya ",
    artist:"jubin nautial", 
    cover:"cover23", 
   },
   {
    name:"music5",
    title:"Dill samal ja zara",
    artist:"KishoKumar", 
    cover:"cover6", 
   },
   {
    name:"music6",
    title:" suraj ki jaye ",
    artist:"b.prak", 
    cover:"cover24", 
   },
   {
    name:"music7",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover17", 
   },
   {
    name:"music8",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover18", 
   },
   {
    name:"music9",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover19", 
   },
   {
    name:"music10",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover20", 
   },
   {
    name:"music11",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover21", 
   },
   {
    name:"music12",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover22", 
   },
   {
    name:"music13",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover23", 
   },
   {
    name:"music14",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover24", 
   },
   {
    name:"music15",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover25", 
   },
   {
    name:"music.17",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover26", 
   },
   {
    name:"music18",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover27", 
   },
   {
    name:"music19",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover28", 
   },
   {
    name:"music20",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover29", 
   },
   {
    name:"music21",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover30", 
   },
   {
    name:"music22",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover31", 
   },
   {
    name:"music23",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover32", 
   },
   {
    name:"music24",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover33", 
   },
   {
    name:"music25",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover34", 
   },
   {
    name:"music26",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover35", 
   },
   {
    name:"music28",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover36", 
   },
   {
    name:"music29",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover37", 
   },
   {
    name:"music30",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover38", 
   },
   {
    name:"music31",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover39", 
   },
   {
    name:"music32",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover40", 
   },
   {
    name:"music33",
    title:' dil laga bhi liya ',
    artist:"covere", 
    cover:"cover41", 
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

