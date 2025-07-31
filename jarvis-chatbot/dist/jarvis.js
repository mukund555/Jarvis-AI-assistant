"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jarvis = void 0;
const openaiService_1 = require("./openaiService");
class Jarvis {
    constructor() {
        this.initialize();
    }
    initialize() {
        // Initialization logic for the Jarvis chatbot
        console.log("Jarvis is initializing...");
    }
    respondToUser(userInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.handleInput(userInput);
            return response;
        });
    }
    handleInput(input) {
        return __awaiter(this, void 0, void 0, function* () {
            // Logic to process user input and generate a response
            const ollamaResponse = yield (0, openaiService_1.getOllamaResponse)(input);
            return ollamaResponse;
        });
    }
}
exports.Jarvis = Jarvis;
