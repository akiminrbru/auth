const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://root:root@cluster0.uzysl.mongodb.net/auth');
        app.listen(PORT, () => console.log(`Сервер запущен на порту: ${PORT}...`));
    } catch (e) {
        console.log(e);
    }
}

start();