console.log("Welcome to spotify");
//initialize the variables.
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let masterSongName=document.getElementById('masterSongName');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {  songName:"Coca cola", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
{  songName:"Lallati- Bhandar", filePath:"songs/1.mp3", coverPath:"covers/10.jpg"},
{  songName:"Jai ho pawan kumar", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
{  songName:"Butta bomma", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
{  songName:"High heels ", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
{  songName:"Kar gayi chul", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
{  songName:"Kala chashma", filePath:"songs/6.mp3",  coverPath:"covers/6.jpg"},
{  songName:"tenu suit karda", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
{  songName:" mannat ", filePath:"songs/7.mp3", coverPath:"covers/8.jpg"},
{  songName:"ashiqi2 songs mashup", filePath:"songs/8.mp3", coverPath:"covers/9.jpg"},
{  songName:"zingat ", filePath:"songs/9.mp3", coverPath:"covers/10.jpg"},
{  songName:"Mard -Maratha", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},
{  songName:"Gadi foretuner layo", filePath:"songs/11.mp3", coverPath:"covers/5.jpg"},
{  songName:"Vadhiv distay rao", filePath:"songs/12.mp3", coverPath:"covers/4.jpg"},
{  songName:"Banu baya ..", filePath:"songs/13.mp3", coverPath:"covers/6.jpg"},
{  songName:"sa ra ra", filePath:"songs/14.mp3", coverPath:"covers/2.jpg"},
{  songName:"Yehi Umar hai", filePath:"songs/15.mp3", coverPath:"covers/3.jpg"}
]

songItems.forEach((element,i)=>{
    console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//audioElement.play(); 

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
else{
   audioElement.pause();
   masterPlay.classList.remove('fa-pause-circle');
   masterPlay.classList.add('fa-play-circle');
   gif.style.opacity=0;
}
    })
//listen to events
audioElement.addEventListener('timeupdate',()=>{
//update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
 element.classList.remove('fa-pause-circle');
element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
makeAllPlays();
songIndex= parseInt(e.target.id);

e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src='songs/'+songIndex+'.mp3';
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');
})

})

document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=11){
songIndex=0;
}
else{
    songIndex+=1;
}
audioElement.src='songs/'+songIndex+'.mp3';
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
    songIndex=11;
    }
    else{
        songIndex-=1;
    }
    audioElement.src='songs/'+songIndex+'.mp3';
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
    })