

document.querySelector('.container').addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

document.querySelector('.container').addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchendX < touchstartX) {
        window.location.href = './html/football.html';
    }
}