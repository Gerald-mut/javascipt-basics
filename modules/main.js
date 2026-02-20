import { getOptimization } from "./api.js";
import { displaySuggestion } from "./ui.js";

const button = document.getElementById("optimize-btn");

button.addEventListener("click", async () => {
    const data = await getOptimization();
    displaySuggestion(data.title);
    console.log(data.title);
});