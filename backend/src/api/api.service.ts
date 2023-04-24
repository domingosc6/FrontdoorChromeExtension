import { Injectable, Logger } from "@nestjs/common";
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class ApiService  {
  private openai;
  private readonly logger = new Logger(ApiService.name);
  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
      organization: process.env.ORG_API_KEY
    });
    this.openai = new OpenAIApi(configuration);
  }

  async createCompletion(prompt) {
    const promptWithSummarize = `Summarize this text: \n\n\n ${prompt}`
    const completion = await this.openai.createCompletion({
      model: 'text-davinci-003',
      prompt: promptWithSummarize,
      max_tokens: 2048,
      temperature: 0.2,
    });

    return completion?.data.choices?.[0]?.text;
  }
}