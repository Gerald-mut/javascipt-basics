const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const submitButton = document.getElementById("submit-btn");
const form = document.querySelector('form');
const results = document.getElementById('results');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cvInput = e.target.elements.cv;
    const errorMsg = document.getElementById('error');
    
    if (cvInput.value.trim() === "") {
        cvInput.classList.add("invalid");
        errorMsg.classList.remove("hidden");
        return;
    }

    cvInput.classList.remove("invalid");
    errorMsg.classList.add("hidden");

    submitButton.textContent = "Processing...";
    setTimeout(() => {
        submitButton.textContent = "Done!"
    }, 1000)
    console.log(firstName.value, lastName.value);
})

submitButton.addEventListener('click', () => {
    results.classList.toggle("hidden");
})

// async keyword tells javascript this function handles asynchronous tasks and will always returns a promise
async function fetchData() {
    const titleElement = document.getElementById('post-title');

    try {
        // fetched data from url
        // await keyword tells js to pause the function and wait for a response
        const response = await fetch("https://not-a-site.com");
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // converted the data to json
        const data = await response.json();
        console.log(data);

        titleElement.innerText = `Fetched title: ${data.title}`;
        titleElement.style.color = "green";

    } catch(error) {
        console.error("Fetch failed:", error);
        titleElement.innerText = "Failed to load data: " + error.message;
    }
}

fetchData();