import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
  organization: "org-4fTo2aeEmwc0xrGMNvXlyIRm",
  apiKey: "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",
  // FIX THIS
});

export const fetchData = async (input: string) => {
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `"Summarize this: ${input}"`,
        max_tokens: 2048,
        temperature: 0,
    });

    console.log(response);

    return response.data.choices[0].text;
};

// What is the best album in the 1990s for Pitchfork?
 
export default fetchData;