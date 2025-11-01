import connectToMongoose from './db.js';
import express from 'express';
import authRouter from './routes/auth.js'; // Jab tum export default karte ho, toh import karte waqt koi bhi naam de sakte ho:
import notesRouter from './routes/notes.js'; 

connectToMongoose();

const app = express();
const port = 3000;

app.use(express.json()) ; //  json() -- Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.

app.get('/', (req, res) => {
  res.send('Hello World! from Yogendra Yadav');
});

app.use('/api/auth', authRouter);
app.use('/api/notes', notesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});