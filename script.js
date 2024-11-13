// Validate the first question's input (name)
function validateName() {
    const name = document.getElementById("nameInput").value.trim().toLowerCase();
    const validNames = [
        "mrittika", 
        "mrittike", 
        "tanbin rubayra mrittika", 
        "babesh"
    ];

    if (validNames.includes(name)) {
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "block";
    } else {
        document.getElementById("errorPage").style.display = "block";
    }
}

// Show next question (question 2 -> 3)
function showQuestion3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
}

// Show next question (question 3 -> 4)
function showQuestion4() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "block";
}

// Show next question (question 4 -> 5)
function showQuestion5() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "block";
}

// Show next question (question 5 -> 6)
function showQuestion6() {
    document.getElementById("question5").style.display = "none";
    document.getElementById("question6").style.display = "block";
}

// Finish the process
function finish() {
    alert("All done! Can't wait for our date!");
}
