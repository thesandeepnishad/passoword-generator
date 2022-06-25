let passEl = document.getElementById("pass");
let copyEl = document.getElementById("copy");
let lenEl = document.getElementById("len");
let upperEl = document.getElementById("upper");
let lowerEl = document.getElementById("lower");
let numberEl = document.getElementById("number");
let symbolEl = document.getElementById("symbol");
let generateEl = document.getElementById("generate");
let select = document.querySelector(".select");

let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+=";

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const len = lenEl.value;

  let password = "";

  if (upperEl.checked) {
    password += getUppercase();
  }

  if (lowerEl.checked) {
    password += getLowercase();
  }

  if (numberEl.checked) {
    password += getNumber();
  }

  if (symbolEl.checked) {
    password += getSymbol();
  }

  for (let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
  }

  passEl.innerText = password;
}

function generateX() {
  const arr = [];
  if (
    upperEl.checked == false &&
    lowerEl.checked == false &&
    numberEl.checked == false &&
    symbolEl.checked == false
  ) {
    select.innerHTML = "Please Select At least One";
  }
  
  if (upperEl.checked) {
    arr.push(getUppercase());
    select.innerHTML = "";
  }

  if (lowerEl.checked) {
    arr.push(getLowercase());
    select.innerHTML = "";
  }

  if (numberEl.checked) {
    arr.push(getNumber());
    select.innerHTML = "";
  }

  if (symbolEl.checked) {
    arr.push(getSymbol());
    select.innerHTML = "";
  }

  if (arr.length === 0) return "";

  return arr[Math.floor(Math.random() * arr.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = passEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});
