import express from 'express';
import { SavedEmail } from '../../data/models/email';
import Deps from '../../utils/deps';
import EmailService from '../../modules/email-service';

export const router = express.Router();

const emailService = Deps.get<EmailService>(EmailService);

router.get('/', (req, res) => res.render('index'));

router.post('/subscribe', async (req, res) => {
  try {
    const savedEmail = await SavedEmail.create(req.body);

    await emailService.sendWelcomeEmail(savedEmail);
    
    res.render('subscribed');
  } catch (err) {
    res.status(400).json({ code: 400, message: err });
  }
});
router.get('/confirm-unsubscribe', async (req, res) => {
  try {  
    res.render('unsubscribe', { email: req.query.email });
  } catch (err) {
    res.status(400).json({ code: 400, message: err?.message });
  }
});
router.get('/unsubscribe', async (req, res) => {
  try {
    await SavedEmail.findByIdAndDelete(req.query.email);
  
    res.redirect('unsubscribed');
  } catch (err) {
    res.status(400).json({ code: 400, message: err?.message });
  }
});

router.get('/subscribed', (req, res) => res.render('subscribed'));
router.get('/unsubscribed', (req, res) => res.render('unsubscribed'));