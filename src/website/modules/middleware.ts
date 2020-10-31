import fetch from 'node-fetch';

export async function updateUser(req, res, next) {
  try {
    const token = req.cookie('token');
    if (!token)
      return next();
  
    const response = await fetch(`https://api.github.com/user?access_token=${token}`,
      { headers: { Authorization: `token ${token}` }});
    if (response.ok)
      res.locals.user = await response.json();
  } finally {
    return next();
  }
}
 