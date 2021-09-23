const currentOperation = document.getElementById("currentOperation");
const previewOperation = document.getElementById("previewOperation");
const operations = Array("+", "-", "*", "/");

function clear(currentOperation, previewOperation) {
  currentOperation.value = "";
  previewOperation.value = "";
}

function dell(value) {
  currentOperation.value += "";
}

function negative(currentOperation) {
  currentOperation.value = -currentOperation.value;
}

function joinExpression(value) {
  currentOperation.value += value;
}

function calcAndShowcurrentOperation(previewOperation) {
  previewOperation.value = eval(previewOperation.value);
}

const isAction = (type) => type === "action";
const clearPressed = (value) => value === "c";
const equalsPressed = (value) => value === "=";
const valuePressed = (value) => value === "value";
const negativePressed = (value) => value === "negative";
const dellPressed = (value) => value === "dell";

function calc(type, value) {
  if (isAction(type)) {
    previewOperation.value = currentOperation.value;
    if (clearPressed(value)) clear(currentOperation, previewOperation);
    if (dellPressed(value)) dell(currentOperation);
    if (operations.includes(value)) joinExpression(value);
    if (negativePressed(value)) negative(currentOperation);
    if (equalsPressed(value)) calcAndShowcurrentOperation(currentOperation);
  }

  if (valuePressed(type)) currentOperation.value += value;
}

// Change theme
const button = document.querySelector(".js-theme");
const themes = {
  "t-dark": "t-light",
  "t-light": "t-dark",
};

const setDefaultTheme = (theme = "t-dark") =>
  document.body.setAttribute("data-theme", themes[theme]);

setDefaultTheme();

button.onclick = (event) => {
  const currentTheme = document.body.dataset.theme;
  document.body.setAttribute("data-theme", themes[currentTheme] || "t-dark");
};

// Change the icon of theme (Sun to moon)
const light = document.getElementById("theme-icon");

light.addEventListener("click", function (light) {
  light.target.classList.toggle("dark-mode");
});
