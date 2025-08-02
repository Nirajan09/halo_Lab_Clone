const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 4000;

app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'halolab',
  password: '@Websites123',
  port: 5432,
});

const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 }, 
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (['.pdf', '.jpeg', '.jpg', '.png'].includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, JPEG, PNG, JPG files are allowed'));
    }
  },
});

app.use(express.json());

app.post('/contact', upload.single('file'), async (req, res) => {
  try {
    const { name, email, phone, budget, project } = req.body;
    const file = req.file;

    if (!name || !email || !phone || !budget || !project || !file) {
      return res.status(400).json({ error: 'All fields including file are required' });
    }

    const query = `
      INSERT INTO contacts (name, email, phone, budget, project, file_name, file_type)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `;

    const values = [
      name,
      email,
      phone,
      budget,
      project,
      file.originalname,
      file.mimetype,
    ];

    const result = await pool.query(query, values);
    console.log('Insert successful, ID:', result.rows[0].id);

    fs.unlinkSync(file.path);

    res.json({ message: 'Form submitted successfully', id: result.rows[0].id });
  } catch (err) {
    console.error('DB Insert Error:', err);
    res.status(500).json({ error: 'Database insertion failed' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
