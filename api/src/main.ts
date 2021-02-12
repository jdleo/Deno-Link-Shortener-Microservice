import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';

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
app.use(router.routes());
app.use(router.allowedMethods());

// listen for requests
await app.listen({ port });
