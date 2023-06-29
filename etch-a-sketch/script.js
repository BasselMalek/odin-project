function smithsPaint(object) {
    let decsision = Math.floor(Math.random() * 4);
    console.log(decsision);
    switch (decsision) {
        case 0:
            object.classList.toggle("smiths");
            break;
        case 1:
            object.classList.toggle("queen");
        case 2:
            object.classList.toggle("strangeways");
        case 3:
            object.classList.toggle("meat");
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
                smithsPaint(verDiv);
            });
            horDiv.appendChild(verDiv);
        }
        containerDiv.appendChild(horDiv);
    }
}

window.onload = function () {
    const createBtn = document.getElementById("create");
    createBtn.addEventListener("click", () => {
        let gridHz = prompt("Enter horizontal"),
            gridVr = prompt("Enter vertical");
        createGrid(gridHz, gridVr);
    });
};
