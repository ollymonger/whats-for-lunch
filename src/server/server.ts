import express from "express";
import cors from 'cors';
import * as exp from "express";
import Prisma from "@prisma/client";
import cookieParser, * as cookie from 'cookie-parser';

const { PrismaClient } = Prisma;
const prisma = new PrismaClient();
const app = express();
const port = 8080;

app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

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

    let selected = {
        snack: {
            name: snacks[0].name,
            picture: snacks[0].picture,
            preptime: snacks[0].preptime,
            info: snacks[0].info,
        },
        main: {
            name: mains[0].name,
            picture: mains[0].picture,
            preptime: mains[0].preptime,
            info: mains[0].info,
        },
        drink: {
            name: drinks[0].name,
            picture: drinks[0].picture,
            preptime: drinks[0].preptime,
            info: drinks[0].info,
        }
    }

    res.json(selected);
});
