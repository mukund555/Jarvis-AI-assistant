"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResponse = formatResponse;
exports.logInteraction = logInteraction;
function formatResponse(response) {
    return response.trim();
}
function logInteraction(userInput, botResponse) {
    console.log(`User: ${userInput}`);
    console.log(`Bot: ${botResponse}`);
}
