import express from 'express'
import { PORT, MONGO } from './config';
import chatRoutes from './routes/chat.route';
import userRoutes from './routes/user.route';
import { Server } from "socket.io";
import http from 'http'
import mongoose from 'mongoose';
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors({
  origin: '*'
}));

app.use(chatRoutes)
app.use(userRoutes)
// app.use(messageRoutes)
// app.use(groupRoutes)

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