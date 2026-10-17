const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Mengizinkan akses dari frontend (React)
app.use(express.json()); // Agar server bisa membaca data format JSON

// Data dummy sementara (disimpan di memori)
let todos = [
  { id: 1, text: 'Belajar React JS' },
  { id: 2, text: 'Belajar Backend Node.js' }
];

// 1. Endpoint GET: Ambil semua data todo
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// 2. Endpoint POST: Tambah todo baru
app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// 3. Endpoint DELETE: Hapus todo berdasarkan ID
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== Number(id));
  res.json({ message: 'Todo berhasil dihapus' });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server Backend berjalan di http://localhost:${PORT}`);
});