console.log("Logging successfully");

let start_size = 16;
const container = document.querySelector(".container");


function createGrid(numSquares) {
    for (i = 0; i < numSquares; i++) {
        for (j = 0; j < numSquares; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
            square.style.width = `calc(100% / ${numSquares})`;
            square.style.height = `calc(100% / ${numSquares})`;

            square.addEventListener("mouseover", function(e) {
                square.style.backgroundColor = "black";
            });
        }
    }
}

// call createGrid function on page load
createGrid(16);




  