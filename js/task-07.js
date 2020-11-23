const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const fontSizeChanger = (evt) =>
  (textRef.style.fontSize = evt.currentTarget.value + "px");

fontSizeControlRef.addEventListener("input", fontSizeChanger);
