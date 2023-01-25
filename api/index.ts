import express from 'express';
import imageBoardsRouter from "./routers/imageBoards";
import fileDb from "./fileDb";

const app = express();
const port = 8000;

app.use(express.json());
app.use('/imageBoards', imageBoardsRouter);

const run = async () => {
    await fileDb.init();
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
};

run().catch(console.error);