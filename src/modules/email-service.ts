import nodemailer from 'nodemailer';
import { EmailDocument } from '../data/models/email';
import Mail from 'nodemailer/lib/mailer';

import welcomeEmail from './emails/welcome-email.json';
import config from '../../config.json';

export default class EmailService {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: config.emailAuth.user,
        pass: config.emailAuth.pass,
      },
    });  
  }

  sendWelcomeEmail(savedEmail: EmailDocument) {  
    return this.transporter.sendMail({
      ...welcomeEmail,
      html: `${welcomeEmail.html}
      <footer>Don't want to see these? <a href="https://codea.live/unsubscribe?email=${savedEmail.id}">Unsubscribe</footer>`,
      to: savedEmail.id
    });
  }
}