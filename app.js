"use strict";
const generateChaptcha = document.querySelector(".chaptcha-btn");
const submitBox = document.querySelector(".submit-field");
const submitContainer = document.querySelector(".submitting-box");
const submitBtn = document.querySelector(".submit-btn");
const para = document.querySelector(".para");
const okBtn = document.querySelector(".ok-btn");
const chaptchaContainer = document.querySelector(".chaptcha-container");
const chaptchaBox = document.querySelector(".chaptcha-field");
const allChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+?><:"}{[]';

function createChaptcha() {
  let chaptcha = "";

  while (5 > chaptcha.length) {
    chaptcha += allChars[Math.floor(Math.random() * allChars.length)];
  }
  chaptchaBox.value = chaptcha;

  console.log(chaptcha);
}

// btn

generateChaptcha.addEventListener("click", function () {
  createChaptcha();
  chaptchaBox.style.fontSize = "15px";
  chaptchaBox.style.letterSpacing = "25px";
});
// copy
function copyChaptcha() {
  chaptchaBox.select();
  document.execCommand("copy");
}
const copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", function () {
  copyChaptcha();
});

// submit

function changesPara() {
  para.style.color = "white";
  para.style.marginBottom = "15px";
  para.style.letterSpacing = "2px";
}

submitBtn.addEventListener("click", function () {
  chaptchaContainer.classList.add("hide-box");
  submitContainer.classList.remove("hide-box");
  console.log(submitBox.value);
  if (chaptchaBox.value === submitBox.value) {
    para.innerHTML = "Thank You For Submitting";
    changesPara();
  } else if (submitBox.value === "") {
    para.innerHTML = "Please Enter Something";
    changesPara();
  } else {
    para.innerHTML = "You have entered wrong Captcha";
    changesPara();
  }
});

okBtn.addEventListener("click", function () {
  window.location.reload();
});
