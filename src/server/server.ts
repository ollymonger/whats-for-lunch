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
