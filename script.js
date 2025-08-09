// Wait until the HTML document is fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () { // When the DOM is ready, run the following function

  // Select the chatbot container element (the main chat window) by its ID
  const chatbotContainer = document.getElementById("chatbot-container"); // Gets the element with ID "chatbot-container"

  // Select the close button element by its ID
  const closeBtn = document.getElementById("close-btn"); // Gets the element with ID "close-btn"

  // Select the send button element by its ID
  const sendBtn = document.getElementById("send-btn"); // Gets the element with ID "send-btn"

  // Select the text input element where the user types their message by its ID
  const chatbotInput = document.getElementById("chatbot-input"); // Gets the element with ID "chatbot-input"

  // Select the element where chat messages will be displayed by its ID
  const chatbotMessages = document.getElementById("chatbot-messages"); // Gets the element with ID "chatbot-messages"

  // Select the chatbot icon element that opens the chat by its ID
  const chatbotIcon = document.getElementById("chatbot-icon"); // Gets the element with ID "chatbot-icon"

  // Select the close button element again by its ID (duplicate of closeBtn)
  const closeButton = document.getElementById("close-btn"); // Gets the element with ID "close-btn" again

  // When the chatbot icon is clicked, show the chatbot and hide the icon
  chatbotIcon.addEventListener("click", function () { // Adds a click event listener to the chatbot icon
    chatbotContainer.classList.remove("hidden"); // Removes the "hidden" class to display the chat container
    chatbotIcon.style.display = "none"; // Sets display to "none" to hide the chatbot icon
  });

  // When the close button is clicked, hide the chatbot and show the icon
  closeButton.addEventListener("click", function () { // Adds a click event listener to the close button
    chatbotContainer.classList.add("hidden"); // Adds the "hidden" class to hide the chat container
    chatbotIcon.style.display = "flex"; // Sets display to "flex" to show the chatbot icon again
  });

  // When the send button is clicked, call the sendMessage function to process the message
  sendBtn.addEventListener("click", sendMessage); // Attaches sendMessage() to the send button's click event

  // When a key is pressed in the input field, check if it is Enter and, if so, call sendMessage
  chatbotInput.addEventListener("keypress", function (e) { // Adds a keypress event listener to the input field
    if (e.key === "Enter") { // Checks if the pressed key is "Enter"
      sendMessage(); // Calls sendMessage() when Enter is pressed
    }
  });

  // Define the sendMessage function to send the user's message
  function sendMessage() { // Function to handle sending a message
    const userMessage = chatbotInput.value.trim(); // Retrieves the input text and removes extra spaces
    if (userMessage) { // Checks if the user entered a non-empty message
      appendMessage("user", userMessage); // Displays the user's message in the chat area with "user" styling
      chatbotInput.value = ""; // Clears the input field after sending the message
      getBotResponse(userMessage); // Calls the function to get the bot's response for the user's message
    }
  }

  // Define the appendMessage function to display a message in the chat window
  function appendMessage(sender, message) { // Function to add a message to the chat area; 'sender' indicates "user" or "bot"
    const messageElement = document.createElement("div"); // Creates a new div element for the message
    messageElement.classList.add("message", sender); // Adds the classes "message" and the sender (e.g., "bot" or "user") for CSS styling
    messageElement.textContent = message; // Sets the text content of the new div to the message
    chatbotMessages.appendChild(messageElement); // Appends the new message element to the chat messages container
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scrolls the chat area to the bottom to show the latest message
  }

  // Define an async function to get the bot's response from the OpenAI API
  async function getBotResponse(userMessage) { // Asynchronous function to fetch the bot's response using the user's message
    const apiKey = "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"; // Your secret OpenAI API key (keep it secure!)
    const apiUrl = "https://api.openai.com/v1/chat/completions"; // The OpenAI API endpoint for chat completions

    try { // Start a try block to catch errors during the API call
      const response = await fetch(apiUrl, { // Send a POST request to the API and wait for the response
        method: "POST", // Use the HTTP POST method to send data
        headers: { // Set the headers for the request
          "Content-Type": "application/json", // Specify that the data is in JSON format
          Authorization: `Bearer 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`, // Include the API key for authorization
        },
        body: JSON.stringify({ // Convert the following JavaScript object into a JSON string to send in the request body
          model: "gpt-4o-mini", // Specify the AI model to use
          messages: [{ role: "user", content: userMessage }], // Provide the user's message in an array of message objects
          max_tokens: 150, // Limit the bot's reply to 150 tokens
        }),
      });
      const data = await response.json(); // Parse the API response as JSON and wait for it to finish
      const botMessage = data.choices[0].message.content; // Extract the content of the bot's message from the response data
      appendMessage("bot", botMessage); // Display the bot's message in the chat area with "bot" styling
    } catch (error) { // Catch any errors that occur during the API request
      console.error("Error fetching bot response:", error); // Log the error details in the browser console for debugging
      appendMessage("bot", "Sorry, something went wrong. Please try again."); // Display a user-friendly error message in the chat area
    }
  }

}); // End of the DOMContentLoaded event listener function
