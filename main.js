// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hidden=document.querySelectorAll('div')
hidden.forEach((item)=>{item.addEventListener("DOMContentLoaded",(e)=>{console.log(e)})})

const heart=document.querySelector('.like-glyph')
heart.addEventListener('click',function(e){mimicServerCall()
.then(message=>{alert("success")})
.catch(error=>{
  const remover=hidden.classList.remove('hidden')
  const display=document.querySelector('#modal') 
  //const message='error'
  //display.innerText=message
  alert('fail')
  const timer=setTimeout(function(){return display.className='hidden';}, 3000)
}) 
const liker=document.querySelector('.like-glyph')
liker.addEventListener('click',(e)=>{liker.innerHTML=FULL_HEART;
liker.className='activated-heart';
const remover=document.querySelector('.activated-heart')
remover.addEventListener('click',(e)=>{remover.innerHTML=EMPTY_HEART;remover.classList.remove('activated-heart')})


})})


//heart.addEventListener('click',(e)=>
//{console.log(e.target)})
  //return mimicServerCall()
//then(res=>res.json())*/


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
