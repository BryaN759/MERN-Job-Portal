import express from 'express';
import morgan from 'morgan';

// route imports
import userRoutes from './routes/user.routes';

const app = express();

app.use(morgan('tiny'));

// enpoints
app.use('/api/user', userRoutes);

export default app;
