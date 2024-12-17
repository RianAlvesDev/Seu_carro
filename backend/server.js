const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());

// Endpoint para cadastrar veículos
app.post('/api/veiculos', (req, res) => {
  const { marca, modelo, ano, cor } = req.body;
  const sql = 'INSERT INTO veiculos (nome, carro, placa) VALUES (?, ?, ?)';
  db.query(sql, [marca, modelo, ano, cor], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Veículo cadastrado com sucesso', id: result.insertId });
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
