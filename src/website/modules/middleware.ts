import { SavedBlog } from '../../data/models/blog';
import { getUser } from './github-oauth';
import config from '../../../config.json';

export async function updateUser(req, res, next) {
  try {
    const token = req.cookies.get('token');
    if (token)
      res.locals.user = await getUser(token);
  } finally {
    return next();
  }
}
 
export async function validateUser(_req, res, next) {
  return (res.locals.user)
    ? next()
    : res.json({ code: 401, message: 'You must be logged in to view this page.' });
}

export async function validateBlogOwner(req, res, next) {
  const savedBlog = await SavedBlog.findById({ _id: req.params.id });  
  return (savedBlog?.authorId == res.locals.user.id)
    ? next()
    : res.json({ code: 401, message: `You do not own this blog.` });
}

export async function validateCanPost(_req, res, next) {
  const userCanPost = config.authorizedUsers.includes(res.locals.user.id);
  return (userCanPost)
    ? next()
    : res.json({ code: 401, message: `You must be authorized by an admin to post.` });
}