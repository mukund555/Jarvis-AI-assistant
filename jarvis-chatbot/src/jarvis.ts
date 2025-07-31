import { getOllamaResponse } from './openaiService';

export class Jarvis {
    constructor() {
        this.initialize();
    }

    initialize() {
        // Initialization logic for the Jarvis chatbot
        console.log("Jarvis is initializing...");
    }

    async respondToUser(userInput: string) {
        const response = await this.handleInput(userInput);
        return response;
    }

    async handleInput(input: string) {
        // Logic to process user input and generate a response
        const ollamaResponse = await getOllamaResponse(input);
        return ollamaResponse;
    }
}