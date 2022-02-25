const submitButton = document.querySelector(".js-submit-button");

submitButton.addEventListener("click", function (event) {
  // This will prevent the default behavior
  event.preventDefault();
  const divElement = document.querySelector("[data-content-area]");
  const dateInput = document.querySelector(".js-date-input");
  let birthDate = new Date(dateInput.value);
  let month = birthDate.getMonth() + 1;
  let day = birthDate.getDate() + 1;
  let year = birthDate.getFullYear();
  const usersAge = getAge(year);

  if (usersAge > 21) {
    divElement.innerHTML = `<p>You can Drink!!!!! because you were born in ${year} </p>`;
  } else {
    divElement.innerHTML = `<p>You can't Drink because you were born in ${year} </p>`;
  }
});

/**
 * Take the year passed and subtract it from the current year
 */
function getAge(inputYear) {
  // Get current year
  const currentYear = new Date().getFullYear();
  // Get passed in input year
  const year = inputYear;
  // Calculate age
  const age = currentYear - year;
  return age;
}
