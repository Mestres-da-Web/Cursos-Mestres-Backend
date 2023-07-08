import express from 'express';
import { brandsRoutes } from './routes/brands.routes';
import { specificationsRoutes } from './routes/specifications.routes';

const app = express();

app.use(express.json());

app.use('/brands', brandsRoutes);
app.use('/specifications', specificationsRoutes);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
