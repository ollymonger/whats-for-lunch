import express from "express";
import cors from 'cors';
import * as exp from "express";
import { PrismaClient } from "@prisma/client";
import cookieParser, * as cookie from 'cookie-parser';
import { createServer, IncomingMessage, ServerResponse } from 'http';

const prisma = new PrismaClient();
const app = express();
const port = 8080;

app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));


export const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    response.end('Hello world!');
});

app.get('/test', (req: exp.Request, res: exp.Response) => {
    return res.status(200);
})


app.listen(port, () => {
    return console.log(`Server listening @ ${port}`);
})

app.post('/get-my-food', async (req: exp.Request, res: exp.Response) => {
    // Get all food types
    const drinks = await prisma.lunchItems.findMany({
        where: {
            type: "DRINK"
        }
    });
    const mains = await prisma.lunchItems.findMany({
        where: {
            type: "MAIN"
        }
    });
    const snacks = await prisma.lunchItems.findMany({
        where: {
            type: "SNACK"
        }
    });

    let randomSnack = Math.floor(Math.random() * snacks.length);
    let randomMain = Math.floor(Math.random() * mains.length);
    let randomDrink = Math.floor(Math.random() * drinks.length);

    let selected = {
        snack: {
            name: snacks[randomSnack].name,
            picture: snacks[randomSnack].picture,
            preptime: snacks[randomSnack].preptime,
            info: snacks[randomSnack].info,
        },
        main: {
            name: mains[randomMain].name,
            picture: mains[randomMain].picture,
            preptime: mains[randomMain].preptime,
            info: mains[randomMain].info,
        },
        drink: {
            name: drinks[randomDrink].name,
            picture: drinks[randomDrink].picture,
            preptime: drinks[randomDrink].preptime,
            info: drinks[randomDrink].info,
        }
    }


    res.json(selected);
});
