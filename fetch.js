// Allows code to make network requests to servers
async function getData() {
    const response = await fetch('some url');
    const data = await response.json();
    console.log(data);
}