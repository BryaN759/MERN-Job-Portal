import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// route imports
import userRoutes from './routes/user.routes';

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

// enpoints
app.use('/api/user', userRoutes);

export default app;
