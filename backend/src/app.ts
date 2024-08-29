import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';

// route imports
import userRoutes from './routes/user.routes';
import path from 'path';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true
    })
);

const frontendPath = path.join(__dirname, '../../../frontend/dist');
app.use(express.static(frontendPath));

// enpoints
app.use('/api/user', userRoutes);

export default app;
