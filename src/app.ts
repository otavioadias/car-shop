import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import CarsRoutes from './Routes/CarsRoutes';

const app = express();
app.use(express.json());
app.use(CarsRoutes);

app.use(ErrorHandler.handle);

export default app;
