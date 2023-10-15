// attempting to created swipe functionality for page navigation 
let touchstartX = 0;
let touchendX = 0;

document.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
}, false);