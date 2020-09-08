![CodeAlive](https://codea.live/img/logo.png)

An basic projecct (for now), that allows you to subscribe to a newsletter then receive a welcome email.
It also allows you to send emails with `npm run send-email`. Be sure to edit the email `.json` files to customize the email.

`config.json`
```json
{
  "port": 3000,
  "mongooseURI": "mongodb://localhost/CodeAlive",
  "email": {
    "host": "smtp.ethereal.email",
    "port": 587,
    "secure": false,
    "auth": {
      "user": "",
      "pass": ""
    }
  }
}
```

`config.email.auth`: email + password of email account
You can make a test email account [here](https://ethereal.email).
