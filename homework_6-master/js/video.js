var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid(){ 
	video.play();
	console.log("Play Video");
}

function pauseVid() { 
	console.log("Pause Video");
	video.pause();
} 

function decreaseSpeed() { 
  	console.log("Speed is "+ video.playbackRate);
  	document.getElementById("myVideo").playbackRate = video.playbackRate*0.8;
} 

function increaseSpeed() {

	console.log("Speed is "+ video.playbackRate);
	document.getElementById("myVideo").playbackRate = video.playbackRate*1.25;
} 

function skipAhead() {
	seconds = 60;
	video.currentTime += seconds;
	console.log("Current location is "+ video.currentTime);
	if (video.currentTime == video.duration) {
		video.playbackRate = 1;
		video.currentTime = 0;

	}
} 

function mute() { 
  	if (video.muted == false) {
  		console.log("mute");
  		video.muted = true;
  		document.getElementById("mute").innerHTML = "Unmute";
  	}
  	else{
  	
      	console.log("unmute");
      	video.muted = false;
      	document.getElementById("mute").innerHTML = "mute";

  	}
}

function changeVolume() {
	video.volume=document.getElementById("volumeSlider").value/100;
	document.getElementById("volume").innerHTML=video.volume*100+"%";
	console.log(innerHTML="Volume is "+video.volume*100+"%")
}
       

function gray() { 

	console.log("In grayscale")
	document.getElementById("myVideo").style.filter = "grayscale(100%)";
}

function color() {

	console.log("In color") 
	document.getElementById("myVideo").style.filter = "grayscale(0%)";

}
