const chatbox = document.querySelector(".chatbox");
const sendButton = document.getElementById("send");
const sendContainer = document.querySelector(".send-container")
const messageInput = document.querySelector(".message-input");

sendButton.addEventListener("click", function(){
    const div = document.createElement("div");
    const classNames = [
        "message-text",
        "bg-gray-200",
        "p-3",
        "max-w-[50%]",
        "w-fit",
        "mt-2",
        "rounded-xl"
    ];

    div.classList.add(...classNames);
    const newText = document.createTextNode(messageInput.value);
    div.appendChild(newText);
    chatbox.insertBefore(div, sendContainer);
    messageInput.value = "";
})