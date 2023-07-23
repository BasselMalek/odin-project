window.onload = function () {
    const passInput = document.getElementById("password");
    const passConfirmInput = document.getElementById("password-confirm");
    passConfirmInput.addEventListener("input", () => {
        {
            if (
                passInput.value != "" &&
                passInput.value != passConfirmInput.value
            ) {
                passInput.classList.toggle("error", true);
                passConfirmInput.classList.toggle("error", true);
            } else if (passInput.value === passConfirmInput.value) {
                passInput.classList.remove("error");
                passConfirmInput.classList.remove("error");
            }
        }
    });
};
