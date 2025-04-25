import { Note, User } from '../models/index.js';

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.findAll({
      include: [User]
    });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id, {
      include: [User]
    });
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const { content, userId } = req.body;
    if (!content || !userId) {
      return res.status(400).json({ error: 'content and userId are required' });
    }
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ error: 'content is required' });
    }
    const note = await Note.findByPk(req.params.id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    await note.update(req.body);
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    await note.destroy();
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 