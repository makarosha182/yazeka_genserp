import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

export async function getOpenAIResponse(prompt) {
    try {
        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 150,
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error("Error getting response from OpenAI:", error);
        return "Sorry, something went wrong.";
    }
}
