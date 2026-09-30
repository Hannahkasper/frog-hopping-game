// Select all four lily pads
const lilyPads = document.querySelectorAll(".lily-pad");

// Select the hop counter
const hopCountDisplay = document.querySelector("#hop-count");

// Frog starts on the top-left lily pad
let frogPosition = 0;

// Keep track of successful hops
let hopCount = 0;

// Display the frog on its current lily pad
function displayFrog() {

    // Remove the frog from all lily pads
    lilyPads.forEach(function (pad) {
        pad.innerHTML = "";
    });

    // Place the frog on its current lily pad
    lilyPads[frogPosition].innerHTML =
        '<span class="text-6xl">🐸</span>';
}

// Display the frog when the page loads
displayFrog();

// Listen for keyboard input
document.addEventListener("keydown", function (event) {

    // Remember the frog's position before movement
    const oldPosition = frogPosition;

    // Move right
    if (event.key === "ArrowRight" && frogPosition % 2 === 0) {
        frogPosition++;
    }

    // Move left
    if (event.key === "ArrowLeft" && frogPosition % 2 === 1) {
        frogPosition--;
    }

    // Move down
    if (event.key === "ArrowDown" && frogPosition < 2) {
        frogPosition += 2;
    }

    // Move up
    if (event.key === "ArrowUp" && frogPosition > 1) {
        frogPosition -= 2;
    }

    // Only count the hop if the frog actually moved
    if (frogPosition !== oldPosition) {
        hopCount++;
        hopCountDisplay.textContent = hopCount;
    }

    // Update the frog's position
    displayFrog();
});