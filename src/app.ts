import express, { Express } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app: Express = express();

app.get('/add', async (req, res) => {
    try {
        const createdData = await prisma.user.create({
            data: {
                name: 'jose',
                email: `${Math.trunc(Math.random() * 999999)}`,
                age: Math.trunc(Math.random() * 99),
            },
        });
        res.status(200).json(createdData);
    } catch (error) {
        res.status(500).json('Internal Server Error');
    }
});

app.get('/show', async (req, res) => {
    try {
        const createdData = await prisma.user.findMany();
        res.status(200).json(createdData);
    } catch (error) {
        res.status(500).json('Internal Server Error');
    }
});

app.get('/command', async (req, res) => {
    res.status(200).json(process.env.NODE_ENV);
});

app.listen(3000, () => {
    console.log('App listening on port 3000...');
});
