# codea.live
![CodeAlive Logo](https://codea.live/img/logo.png)

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