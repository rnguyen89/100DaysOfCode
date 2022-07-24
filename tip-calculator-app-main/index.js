const bill = document.getElementById("bill");
const numOfPeople = document.getElementById("numOfPeople");
const tipBtns = document.querySelectorAll(".tip-btn");
const btnReset = document.getElementById("btn-reset");
const totalTip = document.getElementById("total-tip");
const totalPerson = document.getElementById("total-person");

// tip tags
const tipBtn5 = document.querySelector(".tip-btn-5");
const tipBtn10 = document.querySelector(".tip-btn-10");
const tipBtn15 = document.querySelector(".tip-btn-15");
const tipBtn25 = document.querySelector(".tip-btn-25");
const tipBtn50 = document.querySelector(".tip-btn-50");
const tipBtnCustom = document.querySelector(".tip-btn-custom");

// add click event to tip buttons
// calculate tip % with total bill
tipBtn5.addEventListener("click", function () {});
tipBtn10.addEventListener("click", function () {});
tipBtn15.addEventListener("click", function () {});
tipBtn25.addEventListener("click", function () {});
tipBtn50.addEventListener("click", function () {});
tipBtnCustom.addEventListener("click", function () {});

// get total bill

// get total number of people

// reset input values

bill.addEventListener("keyup", function () {
  totalTip.textContent = this.value * 0.05;
});

numOfPeople.addEventListener("keyup", function () {
  let result =
    (parseInt(bill.value) + parseInt(totalTip) * 0.05) / numOfPeople.value;
  totalPerson.textContent = result;
});
