let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("control-icon");
let skipForwardIcon = document.getElementById("skip-forward-icon");
let skipBackwardIcon = document.getElementById("skip-backward-icon");
let pTag = document.querySelector(".music-player p");

// Set the maximum value of the progress bar to the duration of the song
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = 0; // Start the progress bar at 0 initially
}

// Update the progress bar as the song plays
song.ontimeupdate = function () {
    progress.value = song.currentTime;
    if (song.currentTime >= song.duration) {
        progress.value = song.duration; // Set progress bar to end when the song ends
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
}

// Function to replay the song
function replay() {
    song.currentTime = 0;
    song.play();
    controlIcon.classList.remove("fa-play");
    controlIcon.classList.add("fa-pause");
}

// Function to play or pause the song
function playPause() {
    if (controlIcon.classList.contains("fa-pause")) {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    } else {
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
    }
}

// Function to skip forward by 5 seconds
function skipForward() {
    song.currentTime += 5; // Skip forward 5 seconds
    pTag.innerText = "--⏩ 5s-->";
    setTimeout(function () {
        pTag.innerText = "Performed by: S.P.B";
    }, 500);
}

// Function to skip backward by 5 seconds
function skipBackward() {
    song.currentTime -= 5; // Skip backward 5 seconds
    pTag.innerText = "<--⏮️ 5s--";
    setTimeout(function () {
        pTag.innerText = "Performed by: S.P.B";
    }, 500);
}

// Update the progress bar when the song is played
if (song.played && !song.paused) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

// Update the song's currentTime when the progress bar is changed
progress.oninput = function () {
    song.currentTime = progress.value;
    if (song.paused) {
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
    }
}

// Function to show song credits
function showCredits() {
    alert("Song: Mouni-Naanu\nPerformed by: Karthik\nWritten by: Ilayairaja, K M Chaithanya\nSource: IMM");
}
