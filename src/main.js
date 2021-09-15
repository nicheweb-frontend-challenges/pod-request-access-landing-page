let email = document.querySelector("input");
let btn = document.querySelector("button");
let form = document.querySelector("form");
let text = "";
function printWarning(textToPrint) {
  let callToAction = document.querySelector(".call-to-action");
  let para = document.createElement("p");
  callToAction.appendChild(para);
  para.textContent = textToPrint;
}

btn.addEventListener("click", function () {
  let previosWarning = document.querySelector(".call-to-action p");
  if (previosWarning) {
    previosWarning.remove();
  }
  if (email.value) {
    let valid = email.checkValidity();
    if (!valid) {
      text = "Oops! Please check your email";
      printWarning(text);
    } else {
      email.value = "";
    }
  } else {
    text = "Oops! Please add your email";
    printWarning(text);
  }
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
