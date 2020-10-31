import express from 'express';
import { getToken, loginURL } from '../modules/github-oauth';

export const router = express.Router();

router.get('/login', async (req, res) => res.redirect(loginURL));

router.get('/auth', async (req, res) => {
  try {
    const token = await getToken(req.query.code?.toString());
    res.cookie('token', token);
  } finally {
    res.redirect('/');    
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
})