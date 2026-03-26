function toggleChat() {
    const bot = document.getElementById("chatbot");
    bot.classList.toggle("active");
}

function addMessage(sender, message) {
    const chatBox = document.getElementById("chatMessages");

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");
    if (sender === "TyreBot") {
        messageContainer.classList.add("bot-message");
    } else {
        messageContainer.classList.add("user-message");
    }

    const messageText = document.createElement("p");
    messageText.textContent = message;

    messageContainer.appendChild(messageText);
    chatBox.appendChild(messageContainer);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();

    if (!message) return;

    addMessage("You", message);
    input.value = "";

    const reply = getBotReply(message.toLowerCase());

    setTimeout(() => {
        addMessage("TyreBot", reply);
    }, 500);
}

function getBotReply(message) {
    let reply = "I'm TyreBot! Ask me about tyres 🚗";

    if (message.includes("hi") || message.includes("hello")) {
        reply = "Hi there 👋 How can I help you today?";
    }

    else if (message.includes("thank")) {
        reply = "You're welcome 😊 Happy to help!";
    }

    else if (message.includes("recommend") || message.includes("suggest")) {
        reply = "Sure! Tell me your vehicle type (car 🚗, bike 🏍️, or truck 🚛) and your usage (city, highway, off-road).";
    }

    else if (message.includes("car")) {
        if (message.includes("highway")) {
            reply = "For highway driving, I recommend performance or touring tyres for better stability and comfort.";
        }
        else if (message.includes("city")) {
            reply = "For city driving, all-season tyres are perfect. They provide comfort and durability.";
        }
        else {
            reply = "For cars, you can choose:\n• All-season tyres (daily use)\n• Performance tyres (speed & grip)\n• Touring tyres (long drives)";
        }
    }

    else if (message.includes("bike")) {
        if (message.includes("long") || message.includes("tour")) {
            reply = "Touring tyres are best for long-distance rides. They provide comfort and durability.";
        }
        else if (message.includes("speed") || message.includes("sport")) {
            reply = "Sport tyres are great for high speed and grip.";
        }
        else {
            reply = "For bikes, you can choose:\n• Sport tyres (speed)\n• Touring tyres (comfort)\n• Off-road tyres (rough terrain)";
        }
    }

    else if (message.includes("truck")) {
        if (message.includes("heavy")) {
            reply = "For heavy loads, use heavy-duty truck tyres designed for durability and strength.";
        }
        else if (message.includes("highway")) {
            reply = "Highway truck tyres are best for long-distance and fuel efficiency.";
        }
        else {
            reply = "Truck tyres options:\n• Highway tyres\n• All-terrain tyres\n• Heavy-duty tyres";
        }
    }

    else if (message.includes("tyre size") || message.includes("size")) {
        reply = "A tyre size looks like this: 205/55R16.\n• 205 = width (mm)\n• 55 = aspect ratio\n• R = radial type\n• 16 = rim size (inches)";
    }

    else if (message.includes("width")) {
        reply = "Tyre width is the first number (e.g., 205). It shows how wide the tyre is in millimeters.";
    }

    else if (message.includes("pressure")) {
        reply = "Maintaining correct tyre pressure improves safety, fuel efficiency, and tyre life. Always follow manufacturer recommendations.";
    }

    else if (message.includes("life") || message.includes("durability")) {
        reply = "Tyre life depends on usage, road conditions, and maintenance. Regular alignment and proper pressure increase lifespan.";
    }

    else if (message.includes("product") || message.includes("sell")) {
        reply = "We offer car tyres 🚗, bike tyres 🏍️, and truck tyres 🚛 with detailed specifications and categories.";
    }

    else if (message.includes("service")) {
        reply = "We provide tyre installation, wheel alignment, and delivery services.";
    }

    else if (message.includes("category")) {
        reply = "You can explore categories like Car Tyres, Bike Tyres, and Truck Tyres from the menu.";
    }

    else {
        reply = "I'm not sure 🤔 Try asking about tyre size, recommendations, car/bike/truck tyres, or categories!";
    }

    return reply;
}
document.getElementById("userInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

document.getElementById("userInput").focus();