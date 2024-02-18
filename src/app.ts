import express, { Express } from 'express';

const app: Express = express();

app.get('/', (req, res) => {
    res.status(200).json('Hi');
});

app.listen(3000, () => {
    console.log('App listening on port 3000...');
});
