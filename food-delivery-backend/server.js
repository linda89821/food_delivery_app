// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const users = []; // 暫存使用者清單（email + password）

app.post('/api/signup', (req, res) => {
  const { email, password } = req.body;
  console.log('📩 Signup received:', email, password);

  // 模擬成功回應
  res.status(200).json({ success: true });
  if (!email || !password) return res.status(400).json({ error: 'Missing fields' });

  const existing = users.find((u) => u.email === email);
  if (existing) return res.status(409).json({ error: 'User already exists' });

  users.push({ email, password });
  console.log('✅ New user registered:', email);

  return res.status(201).json({ message: 'Signup successful' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  return res.json({ message: 'Login successful' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Backend server is running 🚀');
  });
  