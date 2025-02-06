try {
    console.log("Try running this code.....");
    let result = 10/0;   
}
catch(error) {
    console.log("Something went wrong", error.message);
}
finally {
    console.log("this will always run");
}