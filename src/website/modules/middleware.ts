import { getUser } from './github-oauth';

export async function updateUser(req, res, next) {
  try {
    const token = req.cookies.get('token');
    if (token)
      res.locals.user = await getUser(token);
  } finally {
    return next();
  }
}
 
export async function validateUser(req, res, next) {
  return (res.locals.user)
    ? next()
    : res.json({ code: 401, message: 'Unauthorized.' });
}
