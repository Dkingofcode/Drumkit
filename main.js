//const keys = document.getElementsByClassName('key');


function playSound(event){
  // Find the audio element with the corresponding data-key attribute
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  // Find the key element with the corresponding data-key attribute
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);


// If the audaio and key elements are found, play the sound and add a class for styling
  if(audio && key){
    audio.currentTime = 0; // Rewind the audio to the beginning to allow rapid consecutive plays
    audio.play();
    key.classList.add('playing');
  }
}

// Function to remove the 'playing' class when the transition ends
function removeTransition(event){
    if (event.propertyName !== 'transform') return; // Skip if it's not a transform property
    this.classList.remove('playing');
}

// Add event listeners to each key for the 'transitioned' event
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


// Add a global event listener for the 'keydown' event to play the sound
document.addEventListener('keydown', playSound);










