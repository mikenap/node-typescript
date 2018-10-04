import express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 3333;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, from my TypeScript Express app!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});