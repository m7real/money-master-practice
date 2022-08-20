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

document.getElementById("btn-calc").addEventListener("click", function () {
  const income = getFieldValueById("income");
  const foodExpense = getFieldValueById("food");
  const rentExpense = getFieldValueById("rent");
  const clothesExpense = getFieldValueById("clothes");
  const expenseTotal = foodExpense + rentExpense + clothesExpense;
  setTextElimentValueById("expense-total", expenseTotal);
  const balance = income - expenseTotal;
  setTextElimentValueById("balance", balance);
  setTextElimentValueById("remaining-balance", balance);
});

document.getElementById("btn-save").addEventListener("click", function () {
  const savingRate = getFieldValueById("save-field");
  const currentBalance = getTextElimentValueById("balance");
  // const savingAmount = parseFloat((currentBalance * (savingRate / 100)).toFixed(2));
  const savingAmount = currentBalance * (savingRate / 100);
  setTextElimentValueById("saving-amount", savingAmount);
  const remainingBalance = currentBalance - savingAmount;
  setTextElimentValueById("remaining-balance", remainingBalance);
});
