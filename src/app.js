import express from 'express'
import routes from './routes'

// Config
const app = express();

// Routes
app.use(routes);

export default app;
