export function formatResponse(response: string): string {
    return response.trim();
}

export function logInteraction(userInput: string, botResponse: string): void {
    console.log(`User: ${userInput}`);
    console.log(`Bot: ${botResponse}`);
}