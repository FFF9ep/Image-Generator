import express from 'express';
import cors from 'cors';
import 'dotenv/config'

import connectDB from './Config/MongoDb.js'

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors())
await connectDB()

app.get('/', (req,res) => res.send("API Works Good!"))

app.listen(PORT, () => console.log('Server Running on port ' + PORT ));