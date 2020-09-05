import Deps from '../utils/deps';
import EmailService from '../modules/email-service';
import email from '../modules/emails/email.json';

import '../app';

const emailService = Deps.get<EmailService>(EmailService);
setTimeout(async() => {
  const count = await emailService.sendEmails(email);
  console.log(`Sent email to ${count} recipients!`);

  process.exit(1);
}, 1000);
