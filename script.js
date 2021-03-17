const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select a media stream, pass to video element, then play

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch errors
    console.log("Opsy dops, something isn't right..", error);
  }
};

// On Load
selectMediaStream();
