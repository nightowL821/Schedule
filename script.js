document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('answer');
    const submitButton = document.getElementById('submitButton');

    const correctAnswer = "yes"; // The answer that redirects

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        if (inputField.value.trim().toLowerCase() === correctAnswer) {
            window.location.href = 'notGirlfriend.html'; // Redirects to this file
        } else {
            alert('Sorry, that’s not the correct answer. Please try again!');
        }
    });
});
