import express from 'express'
import chatRoutes from './routes/chat.route';
import userRoutes from './routes/user.route';
import http from 'http'
import mongoose from 'mongoose';
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet';
import { Server } from "socket.io";
import { PORT, MONGO } from './config';

const app = express()

app.use(express.json())
app.use(cors({
  origin: '*'
}));
app.use(helmet())
app.use(rateLimit({ windowMs: 5 * 60 * 1000, max: 20 }))
app.use('/chat', chatRoutes)
app.use('/user', userRoutes)
// app.use('/message',messageRoutes)
// app.use('group',groupRoutes)

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
  }
}
)
io.on('connection', async (socket) => {
  console.log("Usuario " + socket.id + " se ha conectado");
})


mongoose.connect(MONGO)
  .then(() => console.log('mongoDB connected'))
  .catch(err => console.log("DB ERROR", err))


app.listen(PORT, () => { console.log(`Server running on port=${PORT}`) })