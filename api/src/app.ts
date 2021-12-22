import express from 'express'
import config from './config';
import morgan from 'morgan';
import cors from 'cors'
import videoRoutes from './routes/videos.routes'

const app = express();

app.set('port', config.PORT);

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());3

app.use(express.urlencoded({extended: false}));

app.use(videoRoutes)

export default app;