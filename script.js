function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value;

    if (message === "") return;

    displayMessage(message, "user");

    let botReply = getBotResponse(message);
    setTimeout(() => {
        displayMessage(botReply, "bot");
    }, 500);

    input.value = "";
}

function displayMessage(msg, sender) {
    let chatBox = document.getElementById("chatBox");

    let div = document.createElement("div");
    div.classList.add("message", sender);
    div.innerText = msg;

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello")) return "Hi!";
    if (input.includes("how are you")) return "I am fine!";
    if (input.includes("bye")) return "Goodbye!";
    
    return "Sorry, I don't understand.";
}