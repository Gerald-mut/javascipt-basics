//wait for page to load
document.addEventListener('DOMContentLoaded', function() {

    //select the submit button and input to be used later
    const newtask = document.querySelector('#task');
    const submit = document.querySelector('#submit');
  
    //disable submit button by default
    submit.disabled = true;

    //listen for input to be typed into the input field
    newtask.onkeyup = () => {
        if (newtask.value.length > 0) {
            submit.disabled = false;
        }
        else {
            submit.disabled = true;
        }
    }

    //listen for submission of form
    document.querySelector('form').onsubmit = () => {

        //find the new task the user just submitted
        const task = newtask.value;

        //create a new list item for the new task and add the task to it
        const li = document.createElement('li');
        li.innerHTML = task;

        //add new element to our unordered list
        document.querySelector('#tasks').append(li);

        //clear out input field
        newtask.value = '';

        //disable the submit button
        submit.disabled = true;

        //stop the form from submitting
        return false;
    }

});