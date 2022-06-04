const itemsArray = document.querySelectorAll(".item");
const overlay = document.querySelector(".overlay");
const resetButton = document.querySelector("button");

console.log(itemsArray);

var sign = "cross";
let count = 0;
function signtoggle(sign1) {
  count++;
  console.log(count);
  if (count & 1) {
    sign1 = "circle";
  } else {
    sign1 = "cross";
  }
  return sign1;
}

itemsArray.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("cross")) {
    } else if (element.classList.contains("circle")) {
    } else {
      element.classList.add(signtoggle(sign));
    }
    if (
      (itemsArray[0].classList.contains("circle") &&
        itemsArray[1].classList.contains("circle") &&
        itemsArray[2].classList.contains("circle")) ||
      (itemsArray[3].classList.contains("circle") &&
        itemsArray[4].classList.contains("circle") &&
        itemsArray[5].classList.contains("circle")) ||
      (itemsArray[6].classList.contains("circle") &&
        itemsArray[7].classList.contains("circle") &&
        itemsArray[8].classList.contains("circle")) ||
      (itemsArray[0].classList.contains("circle") &&
        itemsArray[3].classList.contains("circle") &&
        itemsArray[6].classList.contains("circle")) ||
      (itemsArray[1].classList.contains("circle") &&
        itemsArray[4].classList.contains("circle") &&
        itemsArray[7].classList.contains("circle")) ||
      (itemsArray[2].classList.contains("circle") &&
        itemsArray[5].classList.contains("circle") &&
        itemsArray[8].classList.contains("circle")) ||
      (itemsArray[0].classList.contains("circle") &&
        itemsArray[4].classList.contains("circle") &&
        itemsArray[8].classList.contains("circle")) ||
      (itemsArray[2].classList.contains("circle") &&
        itemsArray[4].classList.contains("circle") &&
        itemsArray[6].classList.contains("circle"))
    ) {
      overlay.innerHTML =
        '<div class="win-container"><h1 id="Winner">Player 1 </h1><h1>Won</h1></div>';
      overlay.classList.remove("none");
      overlay.classList.add("flex");
      console.log("p1");
    } else if (
      (itemsArray[0].classList.contains("cross") &&
        itemsArray[1].classList.contains("cross") &&
        itemsArray[2].classList.contains("cross")) ||
      (itemsArray[3].classList.contains("cross") &&
        itemsArray[4].classList.contains("cross") &&
        itemsArray[5].classList.contains("cross")) ||
      (itemsArray[6].classList.contains("cross") &&
        itemsArray[7].classList.contains("cross") &&
        itemsArray[8].classList.contains("cross")) ||
      (itemsArray[0].classList.contains("cross") &&
        itemsArray[3].classList.contains("cross") &&
        itemsArray[6].classList.contains("cross")) ||
      (itemsArray[1].classList.contains("cross") &&
        itemsArray[4].classList.contains("cross") &&
        itemsArray[7].classList.contains("cross")) ||
      (itemsArray[2].classList.contains("cross") &&
        itemsArray[5].classList.contains("cross") &&
        itemsArray[8].classList.contains("cross")) ||
      (itemsArray[0].classList.contains("cross") &&
        itemsArray[4].classList.contains("cross") &&
        itemsArray[8].classList.contains("cross")) ||
      (itemsArray[2].classList.contains("cross") &&
        itemsArray[4].classList.contains("cross") &&
        itemsArray[6].classList.contains("cross"))
    ) {
      overlay.innerHTML =
        '<div class="win-container"><h1 id="Winner">Player 2 </h1><h1>Won</h1></div>';
      overlay.classList.remove("none");
      overlay.classList.add("flex");
      console.log("p2");
    }
        else if( (itemsArray[0].classList.contains('circle') || itemsArray[0].classList.contains('cross')) &&
            (itemsArray[1].classList.contains('circle') || itemsArray[1].classList.contains('cross')) &&
            (itemsArray[2].classList.contains('circle') || itemsArray[2].classList.contains('cross')) &&
            (itemsArray[3].classList.contains('circle') || itemsArray[3].classList.contains('cross')) &&
            (itemsArray[4].classList.contains('circle') || itemsArray[4].classList.contains('cross')) &&
            (itemsArray[5].classList.contains('circle') || itemsArray[5].classList.contains('cross')) &&
            (itemsArray[6].classList.contains('circle') || itemsArray[6].classList.contains('cross') )&&
            (itemsArray[7].classList.contains('circle') || itemsArray[7].classList.contains('cross')) &&
            (itemsArray[8].classList.contains('circle') || itemsArray[8].classList.contains('cross')) )
    {
      overlay.innerHTML = '<div class="win-container"><h1 id="Winner">Draw</div>'
          overlay.classList.remove("none");
          overlay.classList.add("flex");
          console.log("won");
    }
  });
});

function reseting() {
  itemsArray.forEach((element) => {
    element.classList.remove("cross");
    element.classList.remove("circle");
  });
  overlay.classList.remove("flex");
  overlay.classList.add("none");
}
