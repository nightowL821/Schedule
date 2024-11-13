function checkName() {

    var name = document.getElementById("name").value.trim().toLowerCase();

    var validNames = [
        "mrittika", "mrittike", "tanbin rubayra mrittika", 
        "tanbin rubayra mrittika", "babesh"
    ];
    if (validNames.includes(name)) {
        window.location.href = "nextQuestionPage.html"; 
    } else {
        window.location.href = "notGirlfriend.html";
    }
}
