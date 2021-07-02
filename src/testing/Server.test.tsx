import request from 'supertest'
import { Express } from 'express-serve-static-core'

import { server } from '../server/server'
import { Server } from 'http';

let serv: Server;

beforeAll(async () => {
    serv = await server
})

test('/test to return 200', async () => {
    const res = await request(server).get('/test');
    expect(res.statusCode).toEqual(200);
})

test('/get-my-food to return valid - not null - object', async () => {
    const res = await request(server).get('/get-my-food');
    let nobj = { snack: null, drink: null, main: null };
    expect(Object.is(res.body, nobj)).toEqual(false)
})
