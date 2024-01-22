const OpenAI = require("openai").default;
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

const main = async () => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "Who won the world series in 2022?" },
      ],
      model: process.env.MODEL_NAME,
    });

    console.log(completion.data.choices[0].text.trim());
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

main();
