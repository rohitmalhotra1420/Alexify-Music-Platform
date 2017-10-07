


$('#change').on('click', function() {
var name=$('#usr').val();
var passward=$('#pwd').val();     
if(name.length>3 && passward.length>5)
{          
var user=name;
$('.username').text(user);
$('#first').addClass('hidden');
$('#two').removeClass('hidden');
}
else{
alert('Enter valid Username and Password.');
}

});

$('.mood1').on('click',function(){
    $('#mood').addClass('hidden');
    $('#player-list').removeClass('hidden');
});




function toggleSong() {
    var song=document.querySelector('audio');
    if(song.paused==true){
        $('.play-icon').removeClass('fa-play').addClass('fa-pause');
        song.play();
        console.log('playing');
    }
    else{
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        song.pause();
        console.log('paused');
        
    }
} 

$('.fa-play').on('click',function(){
 toggleSong();
});


$('body').on('keypress',function(event){
   if (event.keyCode==32){
      toggleSong();
   } 
});


function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

function songduration(){
    var song=document.querySelector('audio');
    var currentTime = Math.floor(song.currentTime);
    currentTime = fancyTimeFormat(currentTime);

    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration)

    $('.currentTime').text(currentTime);
    $('.duration').text(duration);
    
}

window.onload=function(){
  $('#song1 .song-name').text(songList[0]);
  $('#song2 .song-name').text(songList[1]);
  $('#song3 .song-name').text(songList[2]);
  $('#song4 .song-name').text(songList[3]);
    songduration();
    setInterval(function(){
        songduration();
    },1000);
}

 var songList = ['Badri Ki Dulhania (Title Track)',
'Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song']; 

 var fileNames = ['song1.mp3','song2.mp3',
      'song3.mp3','song4.mp3'];


$('#song1').click(function() {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;
  if(currentSong.search(fileNames[0]) != -1)
  {
    toggleSong();
  }
  else {
    audio.src = fileNames[0];
    toggleSong();
  }
});


$('#song1').click(function() {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;
  if(currentSong.search(fileNames[1]) != -1)
  {
    toggleSong();
  }
  else {
    audio.src = fileNames[1];
    toggleSong();
  }
});
