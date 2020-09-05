import express from 'express';
import bodyParser from 'body-parser';
import { router as rootRoutes } from './routes/root';

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use(bodyParser());

app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

app.use('/', rootRoutes);
app.get('*', (req, res) => res.redirect('/'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server live on port ${port}`))