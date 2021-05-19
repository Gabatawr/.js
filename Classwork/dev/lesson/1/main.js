/* Lesson 1 */

// Counter
let count = 0;
let counterText = document.querySelector(".counterText");

document.querySelector(".counterBtn")
        .addEventListener("click", () => {
            counterText.innerHTML = ++count;
        });