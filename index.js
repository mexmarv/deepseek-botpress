const axios = require('axios');

module.exports = async (bp) => {
  // Register the integration in Botpress
  bp.integration.register('deepseek-integration', {
    config: {
      apiKey: { type: 'string', required: true, encrypted: true },
      endpoint: { type: 'string', default: 'https://api.deepseek.com/v1/chat/completions' }
    },
    actions: {
      async sendMessage(event, args) {
        const { apiKey, endpoint } = args.config;
        const userMessage = event.payload.text;

        try {
          const response = await axios.post(
            endpoint,
            {
              model: "deepseek-lite-preview",
              messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: userMessage }
              ],
              max_tokens: 500,
              temperature: 0.7
            },
            {
              headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
              }
            }
          );
          return response.data.choices[0].message.content;
        } catch (error) {
          console.error("Error calling DeepSeek API:", error);
          return "Sorry, there was an error processing your request.";
        }
      }
    }
  });
};