import http from 'http'
import { Server } from "socket.io";

export default function createIoConn(app: Express.Application) {
  
  const server = http.createServer(app)

  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"]
    }
  })

  io.on('connection', async (socket) => {
    console.log("Usuario " + socket.id + " se ha conectado");
  })
}