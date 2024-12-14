const btn = document.querySelectorAll(".btn");

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    number = btn.value;
    changeBackground(number);
  });
});

const body = document.body;

function changeBackground(number) {
  body.className = "";
  switch (number) {
    case "purple":
      body.classList.add("purple");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;
    case "random":
      changeToRandomColor();
      break;
  }
}

function changeToRandomColor() {
  const colors = [
    "purple",
    "blue",
    "red",
    "green",
    "yellow",
    "black",
    "olive",
    "gold",
    "pink",
    "white",
    "teal",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.classList.add(randomColor);
}
