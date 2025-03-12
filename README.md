# DeepSeek Integration for Botpress

This integration allows Botpress to connect with the DeepSeek API to use advanced language models.

## Requirements
- Botpress v12 or higher.
- A DeepSeek API Key (get it [here](https://platform.deepseek.com/)).

## Installation
1. Install the integration from the Botpress Marketplace.
2. Go to your bot's settings and look for the "DeepSeek Integration" section.
3. Enter your DeepSeek API Key and save the changes.

## Usage
### In Flows
You can use the `sendMessage` action in your flows to send messages to DeepSeek and get responses.

Example flow:
1. Create a node in your flow.
2. Add a custom action with the following code:
   ```javascript
   const botResponse = await bp.integration.sendMessage(event, {
     config: { apiKey: "YOUR_API_KEY", endpoint: "https://api.deepseek.com/v1/chat/completions" },
     userMessage: event.payload.text
   });
   event.reply(botResponse);
   ```
### In Code
You can also use the integration directly in your bot's code:
```javascript
const response = await bp.integration.sendMessage(event, {
  config: { apiKey: "YOUR_API_KEY", endpoint: "https://api.deepseek.com/v1/chat/completions" },
  userMessage: "Hello, how are you?"
});
```
## Support
If you encounter any issues or have questions, open an issue on [GitHub](https://github.com/mexmarv/deepseek-botpress)) or contact the author.

## Contributing
Contributions are welcome! If you'd like to improve this integration, fork the repository and submit a pull request.