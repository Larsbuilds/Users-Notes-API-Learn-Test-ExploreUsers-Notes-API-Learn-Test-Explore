import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from './controllers/UserController.js';
import { getNotes, getNoteById, createNote, updateNote, deleteNote } from './controllers/NoteController.js';
import './db/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// User routes
app.get('/users', getUsers);
app.get('/users/:id', getUserById);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

// Note routes
app.get('/notes', getNotes);
app.get('/notes/:id', getNoteById);
app.post('/notes', createNote);
app.put('/notes/:id', updateNote);
app.delete('/notes/:id', deleteNote);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 