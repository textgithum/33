async function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    let chatBox = document.getElementById("chat-box");
    
    // Show user's message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    
    // Clear input
    document.getElementById("user-input").value = "";

    // Call backend API to get AI response
    let response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput })
    });

    let result = await response.json();

    // Show bot's response
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${result.reply}</p>`;

    // Auto-scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}
