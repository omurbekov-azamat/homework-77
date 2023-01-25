import {promises as fs} from 'fs';
import {ImageBoard} from "./types";

const fileName = './db.json';
let boards: ImageBoard[] = [];

const fileDb = {
    async init() {
        try {
            const fileContents = await fs.readFile(fileName);
            boards = JSON.parse(fileContents.toString());
        } catch (e) {
            boards = [];
        }
    },
    async getItems() {
        await this.init();
        return boards;
    },
    async addItem(item: ImageBoard) {
        boards.push(item);
        await this.save();
        return item;
    },
    async save() {
        await fs.writeFile(fileName, JSON.stringify(boards));
    },
};

export default fileDb;