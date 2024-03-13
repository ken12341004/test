const loadingVideo = document.getElementById('loading-video');

setTimeout(function() {
  const loadingPage = document.getElementById('loading-page');
  loadingPage.style.transition = 'opacity 1s';
  loadingPage.style.opacity = '0';

  setTimeout(function() {
    loadingPage.parentNode.removeChild(loadingPage);
    loadingVideo.pause(); 
  }, 900);
}, 3100);

loadingVideo.addEventListener('loadedmetadata', function() {
  loadingVideo.play();
});

loadingVideo.addEventListener('ended', function() {
  loadingVideo.pause();
});
