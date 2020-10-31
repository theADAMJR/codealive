import express from 'express';
import bodyParser from 'body-parser';
import config from '../../config.json';
import methodOverride from 'method-override';
import { truncateWords } from '../utils/utils';
import cookies from 'cookies';

import { router as authRoutes } from './routes/auth-routes';
import { router as blogRoutes } from './routes/blog-routes';
import { router as rootRoutes } from './routes/root-routes';
import { updateUser } from './modules/middleware';

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookies.express(['39y21h7q2yew78t42t36482wet6gq847y12q']));

app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

app.get('*', updateUser);
app.use('/', rootRoutes);
app.use('/blog', blogRoutes);
app.use('/api', authRoutes);

const port = config.port || 3000;
app.listen(port, () => console.log(`Server live on port ${port}`));

app.locals.util = { truncateWords };