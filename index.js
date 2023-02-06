// 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
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function callApi() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    temperature: 0,
    max_tokens: 7,
  });
  console.log(response.data.choices[0].text);
}

callApi();