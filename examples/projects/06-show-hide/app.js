const clickMeButton = document.querySelector(".js-click-me");

clickMeButton.addEventListener("click", function () {
  const clickMeButtonContent = document.querySelector(".js-hidden-content");
  clickMeButtonContent.classList.toggle("hidden");
});

const clickMeButton2 = document.querySelector(".js-click-me-2");
clickMeButton2.addEventListener("click", function () {
  const clickMeButtonContent2 = document.querySelector(".js-hidden-content-2");
  if (clickMeButtonContent2.style.display == "none") {
    clickMeButtonContent2.style.display = "block";
  } else {
    clickMeButtonContent2.style.display = "none";
  }
});

const multipleButtons = document.querySelectorAll(".js-button");
multipleButtons.forEach((element) => {
  // console.log("start of the loop");
  // console.log(element);
  // console.log("end of the loop");
  element.addEventListener("click", function () {
    // Default remove all existing open divs.
    // TODO: THIS PARTTTTTT

    const allButtons = document.querySelector("[data-content]");
    allButtons.classList.remove("hidden");

    // [data-button-for="content1"] or [data-button-for="content2"] or [data-button-for="content3"]
    const currentButtonValue = element.getAttribute("data-button-for");
    // [data-content="content1"] or [data-content="content2"] or [data-content="content3"]
    const matchingContentElement = document.querySelector(
      '[data-content="' + currentButtonValue + '"]'
    );
    matchingContentElement.classList.toggle("hidden");
  });
});
