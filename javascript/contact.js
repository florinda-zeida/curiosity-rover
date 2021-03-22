/*-----------------contact------------*/
const form = document.querySelector("#contact-form");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
let nameHasError = false;

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
let messageAnswerHasError = false;

const email = document.querySelector("#email-contact");
const emailError = document.querySelector("#emailError");
const invalidEmailError = document.querySelector("#invalidEmailError");
let emailHasError = false;



form.addEventListener("submit", validateForm);

function validateForm() {
  event.preventDefault();
  const nameValue = name.value;

  if (validateLength(nameValue, 1) === true) {
      nameError.style.display = "none";
      nameHasError = false;
  } else {
      nameError.style.display = "block";
      nameHasError = true;
  }

  const messageValue = message.value;

  if (validateLength(messageValue, 20) === true) {
      messageError.style.display = "none";
      messageAnswerHasError = false;
  } else {
      messageError.style.display = "block";
      messageAnswerHasError = true;
  }



  const emailValue = email.value;

  if (!validateEmail(emailValue)) {
      if (emailValue !== "") {
          emailError.style.display = "none";
          invalidEmailError.style.display = "block";
      } else {
          emailError.style.display = "block";
          invalidEmailError.style.display = "none";
      }
      emailHasError = true;
  } else {
      invalidEmailError.style.display = "none";
      emailError.style.display = "none";
      emailHasError = false;
  }

  showMessageFinal(
      nameHasError,
      messageAnswerHasError,
      emailHasError
  );
}

function showMessageFinal(x, y, z, v) {
  if (x === true || y === true || z === true || v === true) {

  } else {
      alert("Message Received\nThanks for sending us your message!");
  }
}

function validateLength(value, lengthToCheck) {
  const trimmedValue = value.trim();

  if (trimmedValue.length >= lengthToCheck) {
      return true;
  } else {
      return false;
  }
}

function validateEmail(emailValue) {
  const regEx = /\S+@\S+\.\S+/;

  if (regEx.test(emailValue)) {
      return true;
  } else {
      return false;
  }
}