const chatbox = document.querySelector(".chatbox");
const sendButton = document.getElementById("send");
const sendContainer = document.querySelector(".send-container")
const messageInput = document.querySelector(".message-input");
const timeStamp = document.querySelector(".timeStamp");
const next = document.getElementById("next");
const form = document.querySelector(".user-form");
const selectElement = document.getElementById("select");


const createUserMessage = (text) => {
    const div = document.createElement("div");
    const classNames = [
        "message-text",
        "bg-gray-200",
        "p-3",
        "max-w-[50%]",
        "w-fit",
        "h-fit",
        "mt-2",
        "mb-2",
        "rounded-xl",
        "justify-self-end",
        "items-end"
    ];

    div.classList.add(...classNames);
    const newText = document.createTextNode(text);
    div.appendChild(newText);
    chatbox.insertBefore(div, sendContainer);
    messageInput.value = "";
}

const createBotMessage = (text) =>{
    const div = document.createElement("div");
    const classNames = [
        "message-text",
        "bg-gray-200",
        "p-3",
        "max-w-[50%]",
        "w-fit",
        "h-fit",
        "mt-2",
        "mb-2",
        "rounded-xl"
    ];

    div.classList.add(...classNames);
    const newText = document.createTextNode(text);
    div.appendChild(newText);
    chatbox.insertBefore(div, sendContainer);
    // messageInput.value = "";
}


next.addEventListener("click", function(){
    chatbox.classList.remove("hidden");
    form.classList.add("hidden");
})


sendButton.addEventListener("click", function(){
    let userText = messageInput.value; 
    createUserMessage(userText);
    getResponse(userText);
})

messageInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        let userText = messageInput.value; 
        createUserMessage(userText);
        getResponse(userText);
    }

})



function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if(hours < 10){
        hours = "0" + hours;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

const firstBotMessage = () => {
    timeStamp.innerHTML = getTime(); //Adding time stamp
    createBotMessage("Hello! welcome to Upperlink Limited");
}

firstBotMessage()


function getResponse(userText){
    let selectedItem = selectElement.value;
    let botResponse = getBotResponse(userText, selectedItem);
    setTimeout(() => {
        createBotMessage(botResponse);
    }, 1000);
}


