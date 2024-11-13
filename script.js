function checkName() {
    // Get the input value
    var name = document.getElementById("name").value.trim().toLowerCase();

    // List of acceptable names (case insensitive)
    var validNames = [
        "Mrittika", "mrittika", "tanbin rubayra mrittika", 
        "Tanbin Rubayra Mrittika", "Babesh"
    ];

    // Check if the name matches one of the valid names
    if (validNames.includes(name)) {
        // If valid, move to the next question page
        window.location.href = "nextQuestionPage.html";  // Change to your next question page
    } else {
        // If name doesn't match, redirect to the "Not My Girlfriend" page
        window.location.href = "notGirlfriend.html";
    }
}
