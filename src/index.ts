import express from 'express'
import { PORT, MONGO } from './config';
import chatRoutes from './routes/chat.route';
import userRoutes from './routes/user.route';
import { Server } from "socket.io";
import http from 'http'
import mongoose from 'mongoose';

const app = express()

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(chatRoutes)
// app.use(messageRoutes)
app.use(userRoutes)
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