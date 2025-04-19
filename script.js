// Create video element
const video = document.createElement('video');
video.src = 'poorlarp.mp4';
video.controls = true;
video.autoplay = true;
video.loop = true;

// Create message element
const message = document.createElement('h1');
message.textContent = 'LAYOOM IS POOR';

// Add to DOM
const app = document.getElementById('app');
app.appendChild(video);
app.appendChild(message);
