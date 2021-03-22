// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



let error = document.querySelector('div#modal')
let modal = document.querySelector('.hidden')

let body = document.querySelector('body')

let h2 = document.querySelector('h2')

function errorRemoval() {
  error.setAttribute('hidden', true)
}

function errorReplace() {
  error.removeAttribute('hidden')
  h2.innerText = 'Random Server Error Try Again'
  setTimeout(function() {
    errorRemoval()
  }, 3000)
}

document.addEventListener("DOMContentLoaded", function () {
  errorRemoval()
})



let article = document.querySelector('.like-glyph')

article.addEventListener('click', function () {
  let call = mimicServerCall()
  call.then(function () {
    let listSelector = document.querySelector('li')
    let heartStatus = document.querySelector('li *')
    if(heartStatus.id === 'highlighted'){
      heartStatus.id = 'un-hilighted'
      heartStatus.className = ''
      heartStatus.innerHTML = EMPTY_HEART;
      listSelector.replaceChild(heartStatus, heartStatus)
    } else {
      heartStatus.id = "highlighted"
      heartStatus.className = 'activated-heart'
      heartStatus.innerHTML = FULL_HEART;
      listSelector.replaceChild(heartStatus, heartStatus)
    }
  }).catch(err => errorReplace())
} )





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
