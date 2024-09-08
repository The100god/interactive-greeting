document.getElementById('greetBtn').addEventListener('click', function () {
    var nameInput = document.getElementById('nameInput').value;
    var greetMessage = document.getElementById('greetMessage');
    var greetingMessage1 = document.getElementById('greetingMessage1');
    var greetingMessage2 = document.getElementById('greetingMessage2');
    var errorMessage = document.getElementById('errorMessage');
    greetMessage.style.transform="scaleY(0)";
    greetMessage.style.transition="transform 0.1s ease-in-out";
    
    // greetMessage.style.display="";
    if (nameInput === "") {
        errorMessage.textContent = "Please enter your name.";
        greetMessage.style.transform="scaleY(1)";
        greetMessage.style.transition="transform 1s ease-in-out";
        greetingMessage1.classList.remove('show');
        greetingMessage2.classList.remove('show');
        setTimeout(()=>{
            // greetMessage.style.transform="scaleX(0)";
            greetMessage.style.transform="scaleY(0)";
            greetMessage.style.transition="transform 0.5s ease-in-out";
        }, 3000)
    } else {
        errorMessage.textContent = "";
        greetMessage.style.transform="scaleY(1)";
        greetMessage.style.transition="transform 1s ease-in-out";
        greetingMessage1.textContent = "Hello, " + nameInput + "!";
        greetingMessage2.textContent = "Nice to meet you.";
        greetingMessage1.classList.add('show');
        greetingMessage2.classList.add('show');
        document.getElementById('nameInput').value = "";
    }
});

