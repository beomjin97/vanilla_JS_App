const images = ["0.jpg", "1.jpg", "2.jpg"];
chosenImage = images[Math.floor(Math.random() * images.length)];

const bg = document.getElementById("background");
bg.style.backgroundImage = `url(img/${chosenImage})`;

document.body.appendChild(bgImage);
