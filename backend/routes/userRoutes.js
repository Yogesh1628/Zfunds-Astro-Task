import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonFilePath = path.join(__dirname, '../data/userData.json');

const readJsonFile = () => {
  try {
    const data = fs.readFileSync(jsonFilePath, 'utf8');
    return JSON.parse(data || '{}');
  } catch (err) {
    return {};
  }
};

const writeJsonFile = (data) => {
  try {
    fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Error writing JSON file:', err);
  }
};

router.get('/get-data', (req, res) => {
  try {
    const data = readJsonFile();
    res.json(data);
  } catch {
    res.status(500).json({ error: 'Failed to read data' });
  }
});

router.post('/user-data', (req, res) => {
  try {
    const newData = req.body;
    const existingData = readJsonFile();

    const updatedData = { ...existingData, ...newData };

    writeJsonFile(updatedData);

    res.json({ message: 'User data updated successfully', data: updatedData });
  } catch {
    res.status(500).json({ error: 'Failed to update user data' });
  }
});

router.post('/update-images', (req, res) => {
  try {
    const { panCardImage, signatureImage } = req.body;

    const existingData = readJsonFile();

    if (panCardImage === null) {
      delete existingData.panCardImage;
    } else if (panCardImage) {
      existingData.panCardImage = panCardImage;
    }

    if (signatureImage === null) {
      delete existingData.signatureImage;
    } else if (signatureImage) {
      existingData.signatureImage = signatureImage;
    }

    writeJsonFile(existingData);

    res.json({ message: 'Images updated successfully', data: existingData });
  } catch {
    res.status(500).json({ error: 'Failed to update images' });
  }
});

export default router;
