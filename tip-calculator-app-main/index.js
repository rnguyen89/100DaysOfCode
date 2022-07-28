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
// create function to calculate tip
// calculate tip % with total bill

tipBtns.forEach((tipBtn) => {
  tipBtn.addEventListener("click", function () {
    tipBtn.classList.toggle("selected");
    let value = this.getAttribute("value");
    tipConversion(value);

    console.log(parseFloat(value));
  });
});

tipBtn5.addEventListener("click", function () {});
tipBtn10.addEventListener("click", function () {});
tipBtn15.addEventListener("click", function () {});
tipBtn25.addEventListener("click", function () {});
tipBtn50.addEventListener("click", function () {});
tipBtnCustom.addEventListener("click", function () {});

// get tip amount / person

function tipConversion(tip) {
  bill.addEventListener("keyup", function (x) {
    let calculation = this.value;
    totalTip.textContent = this.value * tip;
    // console.log(parseFloat(result));
    return parseFloat(calculation);
  });
}

// get total number of people
function party(people) {
  numOfPeople.addEventListener("keyup", function () {
    let partyTotal = this.value;
    totalPerson.textContent = this.value;

    console.log(partyTotal);
  });
}

party();

// reset input values

// bill.addEventListener("keyup", function (x) {
//   let result = this.value;
//   totalTip.textContent = this.value * x;
//   // console.log(parseFloat(result));
//   return parseFloat(result);
// });

// let party2 = numOfPeople.addEventListener("keyup", function () {
//   let result =
//     (parseInt(bill.value) + parseInt(totalTip) * 0.05) / numOfPeople.value;

//   totalPerson.textContent = result;
// });
