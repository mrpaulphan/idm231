const phillySportsTeam = ["Eagles", "Flyers", "Sixers", "Phillies"];

/**
 * Manually create a button with JS and update the button with text
 * @param {string} name
 * @returns {Element}
 */
function createButton(name) {
  // Create a "button" element
  const button = document.createElement("button");
  // Update the button with text
  button.innerHTML = name;

  // Manipulate the attributes such as class, id, style
  button.classList.add("btn-primary");
  button.id = "sports-" + name;
  // change background color based on name
  if (name === "Flyers") {
    // button.classList.add("is-flyers");
    button.style.backgroundColor = "orange";
  } else if (name === "Eagles") {
    button.style.backgroundColor = "green";
  } else if (name === "Sixers") {
    button.style.backgroundColor = "blue";
  } else if (name === "Phillies") {
    button.style.backgroundColor = "red";
  }
  // return the button element we created with all of the attributes and text
  return button;
}

/**
 * Builds buttons and adds it to the page
 */
function buildButtons() {
  // get an element on the page with an ID of "root"
  const divContainer = document.getElementById("root");
  // Loop through all of the sport teams
  for (let i = 0; i < phillySportsTeam.length; i++) {
    let teamName = phillySportsTeam[i];
    // call createbutton() function and pass the teamName with it
    const teamButton = createButton(teamName);
    // get the div and add an element to the end of the div. In this case, we're adding the button we created
    divContainer.appendChild(teamButton);
  }
}

// Call function
buildButtons();
