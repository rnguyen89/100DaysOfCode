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

// get tipbtn nodelist using foreach
// add click event to all tipbtns
// create function to calulate tip
// calculate tip % with total bill

tipBtns.forEach((tipBtn) => {
  tipBtn.addEventListener("click", function () {
    let value = this.getAttribute("value");
    billConversion(value);

    console.log(parseFloat(value));
  });
});

tipBtn5.addEventListener("click", function (e) {
  // let value = this.getAttribute("value");
  // console.log(parseFloat(value) * 142.55);
});
tipBtn10.addEventListener("click", function () {});
tipBtn15.addEventListener("click", function () {});
tipBtn25.addEventListener("click", function () {});
tipBtn50.addEventListener("click", function () {});
tipBtnCustom.addEventListener("click", function () {});

// get total bill

function billConversion(tip) {
  bill.addEventListener("keyup", function (x) {
    let calculation = this.value;
    totalTip.textContent = this.value * tip;
    // console.log(parseFloat(result));
    return parseFloat(calculation);
  });
}

// get total number of people

// reset input values

// bill.addEventListener("keyup", function (x) {
//   let result = this.value;
//   totalTip.textContent = this.value * x;
//   // console.log(parseFloat(result));
//   return parseFloat(result);
// });

// let tip = numOfPeople.addEventListener("keyup", function () {
//   let result =
//     (parseInt(bill.value) + parseInt(totalTip) * 0.05) / numOfPeople.value;

//   totalPerson.textContent = result;
// });
