import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { Jarvis } from './jarvis';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

const jarvis = new Jarvis();

app.post('/chat', async (req, res) => {
    const userInput = req.body.input;
    try {
        const response = await jarvis.respondToUser(userInput);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});