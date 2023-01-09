// import http from 'http'
// import { Server } from "socket.io";
import mongoose from 'mongoose';
import { PORT, MONGO } from './config';
import app from './app'
import createIoConn from './io';

// const server = http.createServer(app)

// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST", "PUT", "DELETE"]
//   }
// })

// io.on('connection', async (socket) => {
//   console.log("Usuario " + socket.id + " se ha conectado");
// })

createIoConn(app)

mongoose.connect(MONGO)
  .then(() => console.log('mongoDB OK'))
  .catch(err => console.log("DB ERROR", err))

app.listen(PORT, () => { console.log(`Server running on port=${PORT}`) })