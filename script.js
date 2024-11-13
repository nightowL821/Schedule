function nextQuestion() {
    var nameInput = document.getElementById("answer").value.trim().toLowerCase();
    var correctName = ["mrittika", "Mrittika", "Tanbin Rubayra Mrittika", "tanbin rubayra mrittika", "babesh"]; // List of correct answers

    if (correctName.includes(nameInput)) {
        window.location.href = "nextquestion.html"; // Proceed to the next question
    } else {
        window.location.href = "notGirlfriend.html"; // Redirect to notGirlfriend page
    }
}
