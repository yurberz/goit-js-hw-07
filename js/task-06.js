const validationInputRef = document.querySelector("#validation-input");
const inputLength = Number(validationInputRef.getAttribute("data-length"));

const checkInput = (evt) =>
  // {
  //   if (validationInputRef.value.length === inputLength) {
  //     validationInputRef.classList.add("valid");
  //     validationInputRef.classList.remove("invalid");
  //   } else {
  //     validationInputRef.classList.add("invalid");
  //     validationInputRef.classList.remove("valid");
  //   }
  // };

  evt.target.value.length === inputLength
    ? validationInputRef.classList.add("valid") ||
      validationInputRef.classList.remove("invalid")
    : validationInputRef.classList.add("invalid") ||
      validationInputRef.classList.remove("valid");

validationInputRef.addEventListener("blur", checkInput);
