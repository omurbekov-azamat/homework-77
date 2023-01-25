import express from "express";
import fileDb from "../fileDb";
import {ImageBoard} from "../types";
import {imagesUpload} from "../multer";

const imageBoardsRouter = express.Router();

imageBoardsRouter.get('/', async (req, res) =>  {
    const imageBoards = await fileDb.getItems();
    res.send(imageBoards);
});

imageBoardsRouter.post('/', imagesUpload.single('image'), async (req, res) => {
    if (!req.body.message) {
        return res.status(400).send({error: 'Message field is required'});
    }

    const imageBoard: ImageBoard = {
        author: req.body.author ? req.body.author : 'Anonymous',
        message: req.body.message,
        image: req.file ? req.file.filename : null,
    };

    const saveImageBoard = await fileDb.addItem(imageBoard);

    res.send(saveImageBoard);
});

export default imageBoardsRouter;
