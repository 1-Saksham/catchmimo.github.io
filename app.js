const socket = io();
let localStream;
const videoContainer = document.getElementById('video-container');

document.getElementById('join').onclick = async () => {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    // Add your code to handle streaming and displaying video
    socket.emit('join', roomId);
};

document.getElementById('mute').onclick = () => {
    // Toggle mute logic
};

document.getElementById('share-screen').onclick = async () => {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    // Add code to share screen stream
};

// Announcement feature
setInterval(() => {
    document.getElementById('announcement-sound').play();
}, 60000); // Announce every minute
