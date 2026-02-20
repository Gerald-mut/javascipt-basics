const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const submitButton = document.getElementById("submit-btn");
const form = document.querySelector('form');
const results = document.getElementById('results');
const cvTextArea = document.getElementById('cv-draft');

cvTextArea.addEventListener('input', (event) => {
    const currentText = event.target.value;
    localStorage.setItem('saved_cv', currentText);

    const receivedCv = localStorage.getItem('saved_cv');
    console.log(receivedCv);
})

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

// implement map, foreach, filter and find
//map
const cvSkills = ["Javascript", "HTML", "CSS", "Python"];
const mapCvskills = cvSkills.map(skill => {
    return `<li>${skill}</li>`
});

document.getElementById("skills-set").innerHTML = mapCvskills.join('');

const imBored = cvSkills.forEach(skill => {
    console.log(`${skill}`);
});

const Users = [
    {id:1, name: "Gerald", age: 21 },
    {id:2, name: "Mary", age: 22 },
    {id:3, name: "Stacy", age: 21 },
]

const filterUsers = Users.filter(user => {
    return user.age > 21;
})

console.log(filterUsers);

const findUsers = Users.find(user => {
    return user.id == 3;
})

console.log(findUsers)
