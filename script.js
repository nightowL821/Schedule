function checkAnswer() {
    var answer1 = document.getElementById("answer1").value.trim().toLowerCase();
    
    if (answer1 === "mrittika" || answer1 === "mrittike" || answer1 === "tanbin rubayra mrittika" || answer1 === "tanbin rubayra mrittika" || answer1 === "babesh") {
        window.location.href = "question2.html"; 
    } else {
        window.location.href = "notGirlfriend.html"; 
    }
}
