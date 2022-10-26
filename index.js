let homeScore= document.getElementById('home-score');
let guestScore= document.getElementById('guest-score');

// Home function to add point whether +1, +2 or +3 
let hoCount=0;
function h1(){
    hoCount+=1;
   homeScore.textContent=hoCount;
}
function h2(){
    hoCount+=2;
   homeScore.textContent=hoCount;
}
function h3(){
    hoCount+=3;
   homeScore.textContent=hoCount;
}
// Guest function to add point whether +1, +2 or +3 
let guCount=0;
function g1(){
    guCount+=1;
   guestScore.textContent=guCount;
}
function g2(){
    guCount+=2;
   guestScore.textContent=guCount;
}
function g3(){
    guCount+=3;
   guestScore.textContent=guCount;
}
