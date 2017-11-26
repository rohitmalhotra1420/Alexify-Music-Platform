
$( document ).ready(function() {
    console.log( "ready!" );
    speechRs.speechinit('Google हिन्दी',function(e){
	        speechRs.speak("Hi,Welcome to Alexify, Please Log In", function() {
                   //speaking completed.
               }, false);	
      });

});
      

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
    
var welcomeGreeting="Hello,"+name+",My name is Alexia. What Would You Like to listen?";
var moodList=", Romantic Songs, English Songs, INDO-POP, Old IS Gold, Bollywood Mashups, Party Songs"
     speechRs.speechinit('Google हिन्दी',function(e){
	        speechRs.speak(welcomeGreeting, function() {
                   //speaking completed.
               }, false);	  
     });
     speechRs.speechinit('Google हिन्दी',function(e){
	        speechRs.speak(moodList, function() {
                   //speaking completed.
               }, false);	  
     });
  
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
   if (event.keyCode==32 ){
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

var indopop = [{
        'name': 'Closer-Kabira',
        'artist': 'Vidya Vox',
        'album': 'Vidya Vox Mashup',
        'duration': '3:23',
       'fileName': 'indopop1.mp3',
       'image':'closerkabira.jpg'
    },
    {
        'name': 'Coldplay n Channa Mereya ',
        'artist': 'Vidya Vox',
        'album': 'Vidya Vox Mashup ',
        'duration': '3:06',
        'fileName': 'indopop2.mp3',
        'image':'coldplaynchanna.jpg'
    },
    {
        'name': 'Let Me n Tum  Hi Ho',
        'artist': 'Vidya Vox',
        'album': 'Let me love you n Tum hi ho',
        'duration': '3:10',
        'fileName': 'indopop3.mp3',
        'image':'letntum.jpg'
    },
    {
        'name': 'Shape Of You(Mann Mera)',
        'artist': 'Gajendra Verma, Ed Sheraan',
        'album': 'Shape of you(Mann Mera)',
        'duration': '3:54',
        'fileName': 'indopop4.mp3',
        'image':'shapenmann.jpg'
    }]

var oldgold = [{
        'name': 'Pehla Nasha',
        'artist': 'Udit Narayan, Sadhna Sargam',
        'album': 'Jo Jeeta Wohi Sikandar',
        'duration': '4:50',
       'fileName': 'old1.mp3',
       'image':'pehlanasha.jpg'
    },
    {
        'name': 'Ek Sanam Chahiye',
        'artist': 'Kumar Sanu',
        'album': 'Ashiqui',
        'duration': '6:12',
        'fileName': 'old2.mp3',
        'image':'sanam.jpg'
    },
    {
        'name': 'Likhe Jo Khat Tujhe',
        'artist': 'Mohammad Rafi',
        'album': 'Kanyadaan',
        'duration': '4:32',
        'fileName': 'old3.mp3',
        'image':'khat.jpg'
    },
    {
        'name': 'Kisi Disco Mein Jayen',
        'artist': 'Udit Narayan, Alka Yagnik',
        'album': 'Chote Miyan Bade Miyan',
        'duration': '5:25',
        'fileName': 'old4.mp3',
        'image':'kisidisco.jpg'
    }]

var mashup= [{
        'name': 'Valentine Mashup 2017',
        'artist': 'Dj Shadow Dubai',
        'album': 'Desilicious 75',
        'duration': '5:06',
       'fileName': 'mashup1.mp3',
       'image':'valentine1.jpg'
    },
    {
        'name': 'The Love Mashup',
        'artist': 'Dj Kiran Kamath',
        'album': 'love Mashup 2016',
        'duration': '4:47',
        'fileName': 'mashup2.mp3',
        'image':'lovemashup.jpg'
    },
    {
        'name': 'Bollywood Love Mashup',
        'artist': 'Dj Alvee',
        'album': 'Mashups',
        'duration': '4:28',
        'fileName': 'Mashup3.mp3',
        'image':'bollywoodlove.jpg'
    },
    {
        'name': 'Zee Valentine Mashup',
        'artist': 'Dj Notorious',
        'album': 'Valentine Mashups',
        'duration': '3:47',
        'fileName': 'Mashup4.mp3',
        'image':'valentine2.jpg'
    }]

var party = [{
        'name': 'Chalti Hai Kya 9 se 12',
        'artist': 'Dev Nagi, Neha Kakkar',
        'album': 'Judwaa2',
        'duration': '4:22',
       'fileName': 'party1.mp3',
       'image':'9se12.jpg'
    },
    {
        'name': 'Disco Disco',
        'artist': 'Benny Dayal, Shirley Setia',
        'album': 'A Gentelman',
        'duration': '2:46',
        'fileName': 'party2.mp3',
        'image':'gentleman.jpg'
    },
    {
        'name': 'Ding Dang',
        'artist': 'Amit Mishra, Antra Mishra',
        'album': 'Munna Michael',
        'duration': '3:23',
        'fileName': 'party3.mp3',
        'image':'dingdang.jpg'
    },
    {
        'name': 'Oonchi Hai Building 2.0',
        'artist': 'Anu Malik, Neha Kakkar',
        'album': 'Judwaa2',
        'duration': '3:25',
        'fileName': 'party4.mp3',
        'image':'Building.jpg'
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
    $('#audioElement').attr('src',romantic[0].fileName);
    for(i=0;i<romantic.length;i++){
    var obj=romantic[i];
details(obj);
    changeCurrentSongDetails(romantic[0]);
}
} 
});
$('.mood2').click(function () {
    mood2clicked = true;
    if(mood2clicked==true){
    $('#audioElement').attr('src',english[0].fileName);
    for(i=0;i<english.length;i++){
    var obj=english[i];
details(obj);
    changeCurrentSongDetails(english[0]);
    
}
}
});
$('.mood3').click(function () {
    mood2clicked = true;
    if(mood2clicked==true){
        $('#audioElement').attr('src',indopop[0].fileName);
    for(i=0;i<indopop.length;i++){
    var obj=indopop[i];
details(obj);
        changeCurrentSongDetails(indopop[0]);
}
}
});$('.mood4').click(function () {
    mood2clicked = true;
    if(mood2clicked==true){
        $('#audioElement').attr('src',oldgold[0].fileName);
    for(i=0;i<oldgold.length;i++){
    var obj=oldgold[i];
details(obj);
         changeCurrentSongDetails(oldgold[0]);
}
}
});$('.mood5').click(function () {
    mood2clicked = true;
    if(mood2clicked==true){
        $('#audioElement').attr('src',mashup[0].fileName);
    for(i=0;i<mashup.length;i++){
    var obj=mashup[i];
details(obj);
    changeCurrentSongDetails(mashup[0]);
}
}
});

$('.mood6').click(function () {
    mood2clicked = true;
    if(mood2clicked==true){
        $('#audioElement').attr('src',party[0].fileName);
    for(i=0;i<party.length;i++){
    var obj=party[i];
details(obj);
          changeCurrentSongDetails(party[0]);
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
