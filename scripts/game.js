const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = 640;
const height = 640;
const clean = () => {
  context.clearRect(0, 0, width, height);
};

const backgroundImage = new Image();
backgroundImage.src = '/images/level1.png';
setTimeout(() => {
  context.drawImage(backgroundImage, 0, 0, width, height);
}, 1000);

