let PAINT_MODE = "smiths";

function genRanHex() {
    return [...Array(6)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join("");
}
function rainbowPaint(object) {
    let color = genRanHex();
    object.style.backgroundColor = `#${color}`;
}

function smithsPaint(object) {
    object.className = "";
    object.classList.toggle("vertical-grid");
    let decsision = Math.floor(Math.random() * 4);
    console.log(decsision);
    switch (decsision) {
        case 0:
            object.classList.toggle("smiths");
            break;
        case 1:
            object.classList.toggle("queen");
            break;
        case 2:
            object.classList.toggle("strangeways");
            break;
        case 3:
            object.classList.toggle("meat");
            break;
        default:
            break;
    }
}

function createGrid(horizontal, vertical) {
    const containerDiv = document.getElementById("etch-pad");
    for (let i = 0; i < horizontal; i++) {
        const horDiv = document.createElement("div");
        horDiv.classList.toggle("horizontal-grid");
        for (let k = 0; k < vertical; k++) {
            const verDiv = document.createElement("div");
            verDiv.classList.toggle("vertical-grid");
            verDiv.addEventListener("click", () => {
                if (PAINT_MODE === "smiths") {
                    smithsPaint(verDiv);
                } else {
                    rainbowPaint(verDiv);
                }
            });
            horDiv.appendChild(verDiv);
        }
        containerDiv.appendChild(horDiv);
    }
}

function eraseGrid() {
    const containerDiv = document.getElementById("etch-pad");
    containerDiv.replaceChildren();
}

window.onload = function () {
    const modeID = document.getElementById("mode");
    const createBtn = document.getElementById("create");
    createBtn.addEventListener("click", () => {
        let gridHz = prompt("Enter horizontal"),
            gridVr = prompt("Enter vertical");
        createGrid(gridHz, gridVr);
    });
    const eraseBtn = document.getElementById("erase");
    eraseBtn.addEventListener("click", () => {
        eraseGrid();
    });
    const rainbowBtn = document.getElementById("rainbow-toggle");
    rainbowBtn.addEventListener("click", () => {
        eraseGrid();
        PAINT_MODE = "rainbow";
        modeID.textContent = PAINT_MODE;
    });
    const smithsBtn = document.getElementById("smiths-toggle");
    smithsBtn.addEventListener("click", () => {
        eraseGrid();
        PAINT_MODE = "smiths";
        modeID.textContent = PAINT_MODE;
    });
};
