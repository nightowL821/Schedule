document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input fields and button
    const inputField = document.getElementById('answer');
    const submitButton = document.getElementById('submitButton');

    // Define the correct answer (assuming it's "yes" for this case)
    const correctAnswer = "yes";

    // Add event listener for submit button
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent form submission

        // Check if the user's answer is correct
        if (inputField.value.trim().toLowerCase() === correctAnswer) {
            // Redirect to "Not My Girlfriend" page if the answer is correct
            window.location.href = 'notGirlfriend.html';  // Redirect URL
        } else {
            // If the answer is wrong, show a message and stay on the current page
            alert('Sorry, that’s not the correct answer. Please try again!');
        }
    });
});
