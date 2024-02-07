// app.mjs (or whatever your main app file is named)

import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import middleware from './modules/middleware.mjs'; // Adjust the path accordingly

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;

// middleware
app.use(middleware);

app.get('/', (req, res) => {
  const indexPath = path.resolve(__dirname, 'public', 'index.html');
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
