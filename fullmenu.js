//full menu price
const EuFlag = document.querySelector(".eu-flag");
const GbFlag = document.querySelector(".gb-flag");
const UsaFlag = document.querySelector(".us-flag");

const cards = document.querySelectorAll(".menu-card");

cards.forEach((card) => {
  const euFlag = card.querySelector(".eu-flag");
  const gbFlag = card.querySelector(".gb-flag");
  const usFlag = card.querySelector(".us-flag");
  const usdPrice = card.querySelector(".price");
  const gbpPrice = card.querySelector(".price-gb");
  const eurPrice = card.querySelector(".price-eu");

  //On start to display only 1 value
  usdPrice.style.display = "none";
  gbpPrice.style.display = "none";

  const flags = card.querySelectorAll(".flag img");
  flags.forEach((flag) => {
    flag.addEventListener("click", () => {
      // Remove "selected" class from all flags
      flags.forEach((f) => f.classList.remove("selected"));

      // Add "selected" class to clicked flag
      flag.classList.add("selected");

      if (flag === euFlag) {
        gbpPrice.style.display = "none";
        usdPrice.style.display = "none";
        eurPrice.style.display = "block";
      } else if (flag === gbFlag) {
        eurPrice.style.display = "none";
        usdPrice.style.display = "none";
        gbpPrice.style.display = "block";
      } else if (flag === usFlag) {
        eurPrice.style.display = "none";
        gbpPrice.style.display = "none";
        usdPrice.style.display = "block";
      }
    });
  });
});
