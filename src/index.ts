import mongoose from 'mongoose';
import { PORT, MONGO } from './config';
import app from './app'
import createIoConn from './io';

createIoConn(app)

mongoose.connect(MONGO)
  .then(() => console.log('mongoDB OK'))
  .catch(err => console.log("DB ERROR", err))
  
  app.listen(PORT, () => { console.log(`Server running on port=${PORT}`) })