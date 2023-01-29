import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet';
import chatRoutes from './routes/chat.route';
import userRoutes from './routes/user.route';
import groupRoutes from './routes/group.route';
import sessionRoutes from './routes/session.route';
// import { proxyConfig } from './config';
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(cors({
  origin: '*'
}));
app.use(helmet())
app.use(morgan('dev'))
app.use(rateLimit({ windowMs: 5 * 60 * 1000, max: 20 }))
// app.use(proxyConfig)
app.use('/chat', chatRoutes)
app.use('/user', userRoutes)
app.use('/group', groupRoutes)
app.use('/session', sessionRoutes)

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(error);
  return res.status(400).send({ message: error.message });
})

export default app