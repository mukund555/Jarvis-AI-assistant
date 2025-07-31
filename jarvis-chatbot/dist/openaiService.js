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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOllamaResponse = void 0;
const axios_1 = __importDefault(require("axios"));
const OLLAMA_API_URL = 'http://localhost:11434/api/generate';
const OLLAMA_MODEL = 'llama3.2'; // or any model you have pulled
const getOllamaResponse = (userInput) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(OLLAMA_API_URL, {
            model: OLLAMA_MODEL,
            prompt: userInput,
            stream: false
        });
        console.log('Ollama API response:', response.data);
        return response.data.response;
    }
    catch (error) {
        console.error('Error fetching response from Ollama:', error);
        throw new Error('Failed to get response from Ollama');
    }
});
exports.getOllamaResponse = getOllamaResponse;
