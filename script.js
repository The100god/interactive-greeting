document.getElementById('greetBtn').addEventListener('click', function () {
    var nameInput = document.getElementById('nameInput').value;
    var greetingMessage = document.getElementById('greetingMessage');
    var errorMessage = document.getElementById('errorMessage');
    
    if (nameInput === "") {
        errorMessage.textContent = "Please enter your name.";
        greetingMessage.classList.remove('show');
    } else {
        errorMessage.textContent = "";
        greetingMessage.textContent = "Hello, " + nameInput + "!";
        greetingMessage.classList.add('show');
    }
});