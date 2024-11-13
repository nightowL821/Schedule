function checkName() {
    const name = document.getElementById("name").value.trim().toLowerCase();
    const validNames = ["mrittika", "mrittike", "tanbin rubayra mrittika", "tanbin rubayra mrittika", "babesh"];
    
    if (validNames.includes(name)) {
        window.location.href = "question2.html";  // Example: Go to the next question page
    } else {
        window.location.href = "notGirlfriend.html";
    }
}
