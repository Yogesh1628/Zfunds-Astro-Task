import express, { json } from 'express';
import cors from 'cors';
import router from './routes/userRoutes.js'; 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(json());


app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
