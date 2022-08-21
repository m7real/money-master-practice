function getFieldValueById(id) {
  const inputField = document.getElementById(id);
  const value = inputField.value;
  inputField.value = "";
  return parseInt(value);
}
function getTextElimentValueById(id) {
  const element = document.getElementById(id);
  const value = element.innerText;
  return parseInt(value);
}
function setTextElimentValueById(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}
function inputValidation() {
  const inputFields = document.getElementsByClassName("input");
  for (const inputField of inputFields) {
    const inputValue = inputField.value;
    if (isNaN(inputValue)) {
      alert("Input Numbers Only");
      return true;
    } else if (inputValue < 0) {
      alert("Invalid Input");
      return true;
    } else if (inputValue === "") {
      alert("Input Field Can not Be Empty");
      return true;
    }
  }
}

document.getElementById("btn-calc").addEventListener("click", function () {
  if (inputValidation()) {
    return;
  }
  const income = getFieldValueById("income");
  const foodExpense = getFieldValueById("food");
  const rentExpense = getFieldValueById("rent");
  const clothesExpense = getFieldValueById("clothes");
  const expenseTotal = foodExpense + rentExpense + clothesExpense;
  const balance = income - expenseTotal;

  if (balance < 0) {
    alert("Your Expense Can Not Be More Than Your Income");
    return;
  }

  setTextElimentValueById("expense-total", expenseTotal);
  setTextElimentValueById("balance", balance);
  setTextElimentValueById("remaining-balance", balance);
});

document.getElementById("btn-save").addEventListener("click", function () {
  const savingRate = getFieldValueById("save-field");
  if (isNaN(savingRate) || savingRate === "" || savingRate < 0) {
    alert("Invalid Input");
    return;
  } else if (savingRate > 100) {
    alert("You Can not Save More Than Your Balance");
    return;
  }
  const currentBalance = getTextElimentValueById("balance");
  const savingAmount = currentBalance * (savingRate / 100);
  setTextElimentValueById("saving-amount", savingAmount);
  const remainingBalance = currentBalance - savingAmount;
  setTextElimentValueById("remaining-balance", remainingBalance);
});
