const radios = document.getElementsByName("lang");
const engelements = document.getElementsByClassName("eng")
const chielements = document.getElementsByClassName("chi")
radios.forEach(radio => {
  radio.addEventListener("change", function() {
    if (radio.value === "eng") {
      Array.from(chielements).forEach(element => {
        element.style.display = "none"
      })
      Array.from(engelements).forEach(element => {
        element.style.display = "block"
      })
    } else if (radio.value === "chi") {
      Array.from(engelements).forEach(element => {
        element.style.display = "none"
      })
      Array.from(chielements).forEach(element => {
        element.style.display = "block"
      })
    }
  });
});