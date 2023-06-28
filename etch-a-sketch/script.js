function createGrid(horizontal, vertical) {
    const containerDiv = document.getElementById("etch-container");
    for (let i = 0; i < horizontal; i++) {
        const horDiv = document.createElement("div");
        horDiv.classList.toggle("horizontal-grid");
        for (let k = 0; k < vertical; k++) {
            const verDiv = document.createElement("div");
            verDiv.classList.toggle("vertical-grid");
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
