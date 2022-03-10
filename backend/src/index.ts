import Koa, { Context } from 'koa';
import BodyParser from 'koa-bodyparser';
import Cors from '@koa/cors';
import Router from 'koa-router';

const server = new Koa();

server.use(BodyParser());
server.use(Cors());

const router: Router = new Router();

router.get('', (ctx: Context) => { ctx.body = 'oi'; });

server.use(router.routes());

server.listen(3000, () => console.log('SERVER STARTED'));
