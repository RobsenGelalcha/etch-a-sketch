console.log("Logging successfully");
const default_size = 16;
let start_size = default_size;
const container = document.querySelector(".container");
const sizeButton = document.querySelector(".sizeButton");
const clear = document.querySelector(".clear");

let makeColor = false;


function getRandomRGB(){
    return Math.floor(Math.random() * 255);
}
function randomizeColor(){
    // rgb(${getRandomRGB()},${getRandomRGB()},${getRandomRGB()})
    this.backgroundColor = `rgb(${getRandomRGB()},${getRandomRGB()},${getRandomRGB()})`;

}

container.style.flexWrap = "wrap";



function createGrid(gridSize){
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        const size = 500/gridSize;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.style.flexBasis= `${size}px`;
        square.style.boxSizing = "border-box";
        square.classList.add("square");
        square.addEventListener("mouseover", function(){


                square.style.backgroundColor = `rgb(${getRandomRGB()},${getRandomRGB()},${getRandomRGB()})`;


        })
        function makeClear(){
            square.style.backgroundColor = "rgb(18, 37, 57)";
        }

        clear.addEventListener("click", makeClear);


        container.appendChild(square);


    }
}
createGrid(start_size);

function removeGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function change_size(){
    removeGrid();
    let new_size = prompt("How many squares do you want? (between 1 and 100): ");
    if (parseInt(new_size)<= 100 && parseInt(new_size)>=1){

        createGrid(parseInt(new_size));
    } else{

        alert("You entered an invalid value.");
        createGrid(start_size);

    }

}








sizeButton.addEventListener("click",change_size);





  