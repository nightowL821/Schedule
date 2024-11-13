// Function to check if the entered name is valid
function checkName() {
    // Get the value of the input field, trimming excess spaces and converting to lowercase
    var name = document.getElementById("name").value.trim().toLowerCase();

    // List of valid names (case insensitive)
    var validNames = [
        "mrittika", "mrittike", "tanbin rubayra mrittika", 
        "tanbin rubayra mrittika", "babesh"
    ];

    // Check if the entered name matches any of the valid names
    if (validNames.includes(name)) {
        // If the name is valid, redirect to the next question page (you can change this URL to your next page)
        window.location.href = "nextQuestionPage.html";  // Change this to your next question page URL
    } else {
        // If the name is not valid, redirect to the "Not My Girlfriend" page
        window.location.href = "notGirlfriend.html";
    }
}
