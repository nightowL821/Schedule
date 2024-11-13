// Function to check the name and redirect
function checkName() {
    // Get the value of the name input field
    var name = document.getElementById("name").value.trim().toLowerCase();

    // List of valid names
    var validNames = [
        "mrittika", "mrittike", "tanbin rubayra mrittika", 
        "babesh"
    ];

    // Check if the name is in the valid names list
    if (validNames.includes(name)) {
        // If valid, redirect to the next question page (replace with actual page URL)
        window.location.href = "nextQuestionPage.html";  // Change URL here
    } else {
        // If invalid, redirect to the "Not My Girlfriend" page
        window.location.href = "notGirlfriend.html";
    }
}
