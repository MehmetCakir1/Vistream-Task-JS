
/*MOBILE NAVBAR */
let faBars=document.getElementById("faBars")
let mobileNavbar=document.getElementById("mobileNavbar")


mobileNavbar.style.display="none"

faBars.addEventListener("click",function(){
  if(mobileNavbar.style.display=="none"){
      mobileNavbar.style.display="flex"
  }else{
      mobileNavbar.style.display="none"
  }
})




//COUNTDOWN
let hours=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");
let days=document.getElementById("days")

let countDownDate = new Date("Wednesday, 08 March 2023").getTime();
let countDown = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let daysDistance = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hoursDistance = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesDistance = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secondsDistance = Math.floor((distance % (1000 * 60)) / 1000);
  
  days.innerText=daysDistance
  hours.innerText=hoursDistance
  minutes.innerText=minutesDistance
  seconds.innerText=secondsDistance

}, 1000);
//-----------------------------------------------------------------------------------

//SPEAKERS

let firstBtn=document.getElementById("firstBtn");
let secondBtn=document.getElementById("secondBtn");
let speakers=document.getElementById("speakersDiv");
let speakersTwo=document.getElementById("speakersDivTwo");
let btnsDiv=document.getElementById("btnsDiv")


firstBtn.addEventListener("click",function(){
speakers.classList.add("activeDiv")
speakers.classList.remove("inactiveDiv")
speakersTwo.classList.add("inactiveDiv")
firstBtn.classList.remove("inactiveBtn")
firstBtn.classList.add("activeBtn")
secondBtn.classList.add("inactiveBtn")

});
secondBtn.addEventListener("click",function(){
speakersTwo.classList.remove("inactiveDiv")
speakersTwo.classList.add("activeDiv")
speakers.classList.add("inactiveDiv")
secondBtn.classList.remove("inactiveBtn")
secondBtn.classList.add("activeBtn")
firstBtn.classList.add("inactiveBtn")

});


let currentSpeakers=speakersData.filter(item=>item.date=="Wednesday, 25 February 2023")
speakersDiv.innerHTML = currentSpeakers.map((item)=> {
	return `<div class=singleSpeaker>
    <img src=${item.img}>
    <h2>${item.name}</h2>
    <p>${item.desc}</p>
    <button>See Bio</button>
</div>`
}).join('') 


let currentSpeakersTwo=speakersData.filter(item=>item.date=="Wednesday, 26 February 2023")
speakersDivTwo.innerHTML = currentSpeakersTwo.map((item)=> {
	return `<div class='singleSpeaker'>
    <img src=${item.img}>
    <h2>${item.name}</h2>
    <p>${item.desc}</p>
    <button>See Bio</button>
</div>`
}).join('') 

let overview=document.getElementById("overview")
let modal=document.getElementById("modal")

modal.style.display="none"
overview.addEventListener("mouseover",function(){
    modal.style.display="block"
})
overview.addEventListener("mouseleave",function(){
    modal.style.display="none"
})



