const container = document.getElementById("lambda-content");

function addLambdaBlocks() {
  const screenWidth = window.innerWidth;
  const lambdaTemplate = " (λx. x x) =>";

  for (let i = 0; i < 200; i++) {
    // Generate 20 rows
    const lambdaBlock = document.createElement("div");
    lambdaBlock.classList.add("lambda-block");

    // Fill the row with as many lambda expressions as will fit
    let rowContent = "";
    while (getTextWidth(rowContent) < screenWidth) {
      rowContent += lambdaTemplate;
    }

    lambdaBlock.innerHTML = `<span class="lambda">${rowContent.trim()}</span>`;
    container.appendChild(lambdaBlock);
  }
}

function getTextWidth(text) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = "20px Roboto"; // Match the font size used for lambda text
  return context.measureText(text).width;
}

// Lazy loading trigger when the user scrolls to the bottom
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addLambdaBlocks(); // Load more when bottom is reached
  }
});

addLambdaBlocks();
