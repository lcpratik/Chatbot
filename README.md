# Chatbot

A floating chatbot widget powered by the OpenAI API. Built with vanilla JavaScript, HTML, and CSS — no frameworks or dependencies.

## Features

- Floating icon that toggles the chat window open and closed
- Sends messages to OpenAI's GPT-4o-mini and renders responses in real time
- Enter key and button both trigger sends
- Fully custom dark UI with smooth transitions

## Tech Stack

| Layer     | Technology               |
|-----------|--------------------------|
| Structure | HTML5                    |
| Styling   | CSS3                     |
| Logic     | Vanilla JavaScript (ES6) |
| AI        | OpenAI API (gpt-4o-mini) |

## Project Structure

```
chatbot/
├── index.html   # App shell and widget markup
├── script.js    # Chat logic and OpenAI API integration
└── style.css    # Floating widget and message bubble styles
```

## Setup

1. Clone the repo
2. Open `script.js` and replace `YOUR_OPENAI_API_KEY` with your key from [platform.openai.com](https://platform.openai.com)
3. Open `index.html` in a browser

> **Note:** For production use, move the API call to a backend server so the key is never exposed in client-side code.

## Author

**Pratik Lamichhane** · [GitHub](https://github.com/lcpratik) · [LinkedIn](https://linkedin.com/in/lcpratik)
