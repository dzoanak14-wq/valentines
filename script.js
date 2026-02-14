const screens = {
  one: document.getElementById("screen-1"),
  two: document.getElementById("screen-2"),
  three: document.getElementById("screen-3"),
  four: document.getElementById("screen-4"),
  five: document.getElementById("screen-5"),
};

const heartBuilder = document.getElementById("heart-builder");
const nextFromHeart = document.getElementById("next-from-heart");
const nameInput = document.getElementById("name-input");
const nameError = document.getElementById("name-error");
const loveError = document.getElementById("love-error");
const alwaysError = document.getElementById("always-error");

const heartFrames = [
  "  ❤   ❤  ",
  " ❤❤ ❤❤ ",
  "❤❤❤❤❤",
  " ❤❤❤ ",
  "  ❤ ",
];

function showScreen(screenKey) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[screenKey].classList.add("active");
}

function animateHeartBuild() {
  let index = 0;
  const timer = setInterval(() => {
    heartBuilder.textContent = heartFrames.slice(0, index + 1).join("\n");
    index += 1;

    if (index === heartFrames.length) {
      clearInterval(timer);
      nextFromHeart.classList.remove("hidden");
    }
  }, 450);
}

nextFromHeart.addEventListener("click", () => showScreen("two"));

document.getElementById("check-name").addEventListener("click", () => {
  if (nameInput.value.trim() === "Bambosz") {
    nameError.textContent = "";
    showScreen("three");
     return;
  }

  nameError.textContent = "Spróbuj ponownie.";
});

document.getElementById("love-no").addEventListener("click", () => {
  loveError.textContent = "Spróbuj ponownie.";
});

document.getElementById("love-yes").addEventListener("click", () => {
  loveError.textContent = "";
  showScreen("four");
});

document.getElementById("always-no").addEventListener("click", () => {
  alwaysError.textContent = "Spróbuj ponownie.";
});

document.getElementById("always-yes").addEventListener("click", () => {
  alwaysError.textContent = "";
  showScreen("five");
});

animateHeartBuild();
