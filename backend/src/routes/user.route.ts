// src/routes/userRoutes.ts
import { Router } from 'express';
import { models } from '../config/db';

const { User, Library } = models;
const router = Router();

router.post('/', async (req, res) => {
  const { username, password, role } = req.body;
  // Tu by malo byť hashovanie hesla a ukladanie do databázy
  // Príklad:
  // const hashedPassword = await bcrypt.hash(password, 10);
  // const user = await User.create({ username, password: hashedPassword, role });
  res.status(201).send({ message: 'User created', user: { username, role } });
});

router.get('/', async (req, res, next) => {
  try {
    const users = await Library.findAll();
    console.log("user",users);
    
    res.send({data: users});
  } catch (e) {
    next(e);
  }
});

export default router;
