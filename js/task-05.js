const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const anonymousValue = 'Anonymous';
nameInput.addEventListener("input", (event) => {
    if (event.currentTarget.value) {
        nameOutput.textContent = event.currentTarget.value;
    } else {
        nameOutput.textContent = anonymousValue;
    }
});
