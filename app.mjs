
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import logRequest from './modules/middleware.mjs'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 8000;

// Use the middleware
app.use(logRequest);

// Set up other middleware or routes as needed

app.get('/', (req, res) => {
    const indexPath = path.resolve(__dirname, 'public', 'index.html');
    res.sendFile(indexPath);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
