import nodemailer from 'nodemailer';
import { EmailDocument, SavedEmail } from '../data/models/email';
import Mail from 'nodemailer/lib/mailer';

import welcomeEmail from './emails/welcome-email.json';
import config from '../../config.json';

export default class EmailService {
  private transporter: Mail;
  
  private styles = `
  <style>
    body {
      padding: 25px;
      color: black;
    }

    h1 {
      color: #246bce;
    }

    footer {
      margin-top: 25vh;
      color: lightgray;
    }

    img {
      max-width: 256px;
    }
  </style>`;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: config.emailAuth.user,
        pass: config.emailAuth.pass,
      },
    });  
  }

  sendWelcomeEmail(savedEmail: EmailDocument) {
    return this.transporter.sendMail({
      ...welcomeEmail,
      html: this.template(welcomeEmail.html),
      to: savedEmail.id
    });
  }

  async sendEmails(email: any) {    
    const savedEmails = await SavedEmail.find();

    await this.transporter.sendMail({
      ...email,
      html: this.template(email.html),
      to: savedEmails.map(se => se._id)
    });

    return savedEmails.length;
  }

  private template(str: string) {
    return `
    <a href="https://codea.live"><img src="https://codea.live/img/logo.png"></a>
    ${str}
    <footer>Don't want these emails? <a href="https://codea.live/confirm-unsubscribe">Unsubscribe</footer>
    ${this.styles}`
  }
}