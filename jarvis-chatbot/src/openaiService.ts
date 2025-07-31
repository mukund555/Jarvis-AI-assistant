import axios from 'axios';

const OLLAMA_API_URL = 'http://localhost:11434/api/generate';
const OLLAMA_MODEL = 'llama3.2'; // or any model you have pulled

export const getOllamaResponse = async (userInput: string): Promise<string> => {
    try {
        const response = await axios.post(OLLAMA_API_URL, {
            model: OLLAMA_MODEL,
            prompt: userInput,
            stream: false
        });
         console.log('Ollama API response:', response.data);
        return response.data.response;
    } catch (error) {
        console.error('Error fetching response from Ollama:', error);
        throw new Error('Failed to get response from Ollama');
    }
};