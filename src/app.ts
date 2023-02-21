import express, { type NextFunction, type Request, type Response } from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import chatRoutes from './routes/chat.route'
import userRoutes from './routes/user.route'
import groupRoutes from './routes/group.route'
import sessionRoutes from './routes/session.route'
// import { proxyConfig } from './config';
import morgan from 'morgan'
import { corsConfig, rateLimitConfig } from './config'

const app = express()

app.use(helmet())
app.use(express.json())
app.use(cors(corsConfig))
app.use(morgan('dev'))
app.use(rateLimit(rateLimitConfig))
// app.use(proxyConfig)
app.use('/chat', chatRoutes)
app.use('/user', userRoutes)
app.use('/group', groupRoutes)
app.use('/session', sessionRoutes)

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(error)
  return res.status(400).send({ message: error.message })
})

export default app
