const submitButton = document.querySelector(".js-submit-button");

function getAge(birthDate) {
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();

  return age;
}

function displayContent(birthDate, canDrink) {
  const contentArea = document.querySelector("[data-content-area]");

  contentArea.innerHTML = `<p>${canDrink}</p><p>${birthDate}</p>`;
}

function handleSubmitBirthday(e) {
  e.preventDefault();
  const dateField = document.querySelector("#birthdayInput");
  let birthDate = new Date(dateField.value);
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate() + 1;
  const year = birthDate.getFullYear();

  let ageResults = getAge(birthDate);
  let canDrink = false;
  if (ageResults >= 21) {
    canDrink = true;
  }

  displayContent(dateField.value, canDrink);
}
submitButton.addEventListener("click", handleSubmitBirthday);
