import express from 'express';
import { BlogDocument, SavedBlog } from '../../data/models/blog';
import { toKebabCase } from '../../utils/utils';
import { updateUser, validateUser } from '../modules/middleware';

export const router = express.Router();

router.get('/', async (req, res) => res.render('blogs/index', { blogs: await SavedBlog.find() }));

router.post('/', updateUser, validateUser, async (req, res) => {
  try {
    const blog: BlogDocument = req.body;

    const savedBlog = await SavedBlog.create({
      _id: toKebabCase(blog.title),
      title: blog.title,
      body: blog.body,
      imageURL: blog.imageURL ?? '/img/default-blog.png',
      authorId: res.locals.user.id
    });

    res.json(savedBlog);
  } catch (err) {
    res.status(400).json({ code: 400, message: err?.message });
  }
});

router.get('/new', (req, res) => res.render('blogs/new'));

router.get('/:id', async (req, res) => {
  const blog = await SavedBlog.findOne({ _id: req.params.id });
  if (!blog)
    return res.status(404).json({ code: 404, message: 'Blog not found.' });

  res.render('blogs/show', { blog });
});