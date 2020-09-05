import express from 'express';

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

app.get('/', (req, res) => res.render('index'));
app.get('/subscribed', (req, res) => res.render('subscribed'));
app.get('/unsubscribed', (req, res) => res.render('unsubscribed'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server live on port ${port}`))