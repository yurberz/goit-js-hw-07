const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

const outputName = (evt) =>
  evt.target.value
    ? (nameOutputRef.textContent = evt.target.value)
    : (nameOutputRef.textContent = "незнакомец");

nameInputRef.addEventListener("input", outputName);
