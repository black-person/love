const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const reallyPopup = document.getElementById("reallyPopup");
const closePopup = document.getElementById("closePopup");


// /change the postion of no button
let noClickCount = 0;

// NO LARI SAAT DIDEKATI
noBtn.addEventListener("mouseover", () => {
  const newX = Math.random() * 200 - 100;
  const newY = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${newX}px, ${newY}px)`;
});

// NO BERHASIL DIPENCET → POPUP
noBtn.addEventListener("click", () => {
  reallyPopup.style.display = "flex";
});
closePopup.addEventListener("click", () => {
  reallyPopup.style.display = "none";
});


// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
