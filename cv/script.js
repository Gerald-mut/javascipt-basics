const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const submitButton = document.getElementById("submit-btn");
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitButton.textContent = "Processing...";
    setTimeout(() => {
        submitButton.textContent = "Done!"
    }, 1000)
    console.log(firstName.value, lastName.value);
})