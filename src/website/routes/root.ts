import express from 'express';
import { SavedEmail } from '../../data/models/email';

export const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.post('/subscribe', async (req, res) => {
  try {
    await SavedEmail.create(req.body);

    res.render('subscribed');
  } catch (err) {
    res.status(400).json({ code: 400, message: err });
  }
});
router.get('/unsubscribe', async (req, res) => {
  try {
    await SavedEmail.findByIdAndDelete(req.query.email);
  
    res.redirect('unsubscribed');
  } catch (err) {
    res.status(400).json({ code: 400, message: err });
  }
});

router.get('/subscribed', (req, res) => res.render('subscribed'));
router.get('/unsubscribed', (req, res) => res.render('unsubscribed'));