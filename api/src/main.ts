import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';

// custom middleware
import { logger } from './middleware/mod.ts';

// port to listen on
let port = Deno.env.get('PORT') ? parseInt(Deno.env.get('PORT')!) : 3001;

// initialize oak app, and router
const app = new Application();
const router = new Router();

// routes
router.get('/', ctx => {
    ctx.response.body = { hello: 'world' };
});

// middleware and routes
app.use(oakCors());
app.use(logger);
app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx, next) => {});

// listen for requests
await app.listen({ port });
