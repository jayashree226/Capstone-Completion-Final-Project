import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from './routes/user.js';
import morgan from "morgan";
import  cors from "cors";
// env variables
dotenv.config();

// connect to MongoDb database
mongoose.connect(process.env.ATLAS_URI);

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())
// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the User Auth API!');
});
app.use('/users', userRouter);

// Global Error middleware
app.use((err, req, res, next) => {
    res.send('Something went really wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
