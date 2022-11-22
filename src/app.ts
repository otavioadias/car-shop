import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import CarsRoutes from './Routes/CarsRoutes';
import MotorcycleRoutes from './Routes/MotorcycleRoutes';

const app = express();
app.use(express.json());
app.use(CarsRoutes);
app.use(MotorcycleRoutes);

app.use(ErrorHandler.handle);

export default app;
