


$('#change').on('click', function() {
var name=$('#usr').val();
var passward=$('#pwd').val();     
if(name.length>3 && passward.length>5)
{          
var user=name;
$('.username').text(user);
$('#first').addClass('hidden');
$('#two').removeClass('hidden');
$('#search').addClass('hidden');
}
else{
alert('Enter valid Username and Password.');
}

});





function moodload(){
for(i=0;i<6;i++){
    var moodnumber=".mood"+(i+1);
    $(moodnumber).on('click',function(){
    $('#mood').addClass('hidden');
    $('#player-list').removeClass('hidden');
    $('#piano').removeClass('hidden');
    $('#drum').removeClass('hidden');
    $('#search').removeClass('hidden');
});
}
}
moodload();




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




var romantic = [{
        'name': 'Ae Dil Hai Mushkil',
        'artist': 'Arijit Singh, Pritam',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '4:29',
       'fileName': 'romantic1.mp3',
       'image':'aedil.jpg'
    },
    {
        'name': 'Aaj Zid',
        'artist': 'Arijit Singh',
        'album': 'Aksar 2',
        'duration': '4:12',
        'fileName': 'romantic2.mp3',
        'image':'aajzid.jpg'
    },
    {
        'name': 'Janna Ve',
        'artist': 'Arijit Singh',
        'album': 'Aksar 2',
        'duration': '5:33',
        'fileName': 'romantic3.mp3',
        'image':'jannave.jpg'
    },
    {
        'name': 'Meer-E-Karawan',
        'artist': 'Amit Mishra, Neeti Mohan',
        'album': 'Luckhnow Central',
        'duration': '6:03',
        'fileName': 'romantic4.mp3',
        'image':'meere.jpg'
    }]

var english = [{
        'name': 'Closer',
        'artist': 'The Chainsmokers ft. Halsey',
        'album': 'Collage',
        'duration': '4:21',
       'fileName': 'english1.mp3',
        'image':'closer.png'
    },
    {
        'name': 'Despacito',
        'artist': 'Luis Fonsi, Daddy Yankee ft. Justin Bieber',
        'album': 'Singles',
        'duration': '3:49',
        'fileName': 'english2.mp3',
        'image':'despacito.jpg'
    },
    {
        'name': 'Let Me Love You',
        'artist': 'Dj Snake Ft. Justin Bieber',
        'album': 'Encore',
        'duration': '3:26',
        'fileName': 'english3.mp3',
        'image':'letme.png'
    },
    {
        'name': 'Shape Of You',
        'artist': 'Ed Sheeran',
        'album': '÷',
        'duration': '3:53',
        'fileName': 'english4.mp3',
        'image':'shape.jpg'
    }]

var rock = [{
        'name': 'rock',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3'
    }]

var oldgold = [{
        'name': 'oldgold',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3'
    }]

var mashup= [{
        'name': 'mashup',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3'
    }]

var party = [{
        'name': 'party',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3'
    }]


var mood1clicked=false;
var mood2clicked=false;
var mood3clicked=false;
var mood4clicked=false;
var mood5clicked=false;
var mood6clicked=false;

function details(obj){
    var name="#song"+(i+1);
    var song=$(name);
    song.find('.song-name').append(obj.name);
    song.find('.song-artist').text(obj.artist);
       song.find('.song-album').text(obj.album); 
        song.find('.song-length').text(obj.duration);
     addSongNameClickEvent(obj,i+1);
    
}

$('.mood1').click(function () {
    mood1clicked = true;
    if(mood1clicked==true) {
    for(i=0;i<romantic.length;i++){
    var obj=romantic[i];
details(obj);
}
} 
});
$('.mood2').click(function () {
    mood2clicked = true;
    if(mood2clicked==true){
    for(i=0;i<english.length;i++){
    var obj=english[i];
details(obj);
}
}
});
$('.mood3').click(function () {
    mood2clicked = true;
    if(mood2clicked==true){
    for(i=0;i<rock.length;i++){
    var obj=rock[i];
details(obj);
}
}
});$('.mood4').click(function () {
    mood2clicked = true;
    if(mood2clicked==true){
    for(i=0;i<oldgold.length;i++){
    var obj=oldgold[i];
details(obj);
}
}
});$('.mood5').click(function () {
    mood2clicked = true;
    if(mood2clicked==true){
    for(i=0;i<mashup.length;i++){
    var obj=mashup[i];
details(obj);
}
}
});

$('.mood6').click(function () {
    mood2clicked = true;
    if(mood2clicked==true){
    for(i=0;i<party.length;i++){
    var obj=party[i];
details(obj);
}
}
});



function searchFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

window.onload=function(){
    changeCurrentSongDetails(romantic[0]);
    changeCurrentSongDetails(english[0]);
    changeCurrentSongDetails(romantic[0]);
    changeCurrentSongDetails(romantic[0]);
    changeCurrentSongDetails(romantic[0]);
    changeCurrentSongDetails(romantic[0]);
    songduration();
    setInterval(function(){
        songduration();
    },1000);
    /*$('#myTable').DataTable({
        paging:false
    });*/
}

function addSongNameClickEvent(songObj,position){
    var songName = songObj.fileName; 
    var id="#song"+position;
$(id).click(function() {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;
  if(currentSong.search(songName) != -1)
  {
    toggleSong();
  }
  else {
    audio.src = songName;
    toggleSong();
    changeCurrentSongDetails(songObj); 
  }
});
}

function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image)
    $('.current-song').text(songObj.name)
    $('.current-album').text(songObj.album)
}
