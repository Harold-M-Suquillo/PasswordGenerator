const createPasswords = document.forms['password-form'];
let password = "";
let valid = ["=", '"', "W", "U", "!", "a", "t", "B", "&", "+", "%", "u", "_", "5", "|", 
             "X", "G", ":", "L", "e", "f", "}", "?", "c", "d", "z", "Q", "A", "C", "`", 
             ")", "(", "H", "1", "2", "3", "4", "6", "7", "8", "9", "0", "y", "x"];


createPasswords.addEventListener('submit', function(e){
    e.preventDefault();
    let value = parseInt(document.getElementById("input-num").value);
    document.getElementById("p1").textContent = genPassword(value);
    document.getElementById("p2").textContent = genPassword(value);
    document.getElementById("p3").textContent = genPassword(value);
    document.getElementById("p4").textContent = genPassword(value);
    
    // Add an class to results so they can be copied to clipboard
    let results = document.getElementsByClassName("passwords");

    for (let i = 0; i < results.length; i++){
        results[i].style.cursor = "pointer";
        results[i].addEventListener('click', function(e){

            navigator.clipboard.writeText(e.target.textContent)

        });
    }
});




// 33 - 122 character unicode support
function genPassword(length){
    password = "";
    for (let j = 0; j < length; j++){
        let number = Math.floor(Math.random() * valid.length);
        password += valid[number];
    }
    return password;
}