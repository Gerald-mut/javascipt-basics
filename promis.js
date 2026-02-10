function simulateAi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Ai analysis complete");
        }, 2000);
    });
}

async function runDemo() {
    console.log("Running....");

    const message = await simulateAi();

    console.log(message);
    console.log("done!");
}

runDemo();