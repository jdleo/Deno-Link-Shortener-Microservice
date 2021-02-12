import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

// import routes
import { clicksRouter, linksRouter, redirectRouter } from './routes/mod.ts';

// custom middleware
import { logger, cors } from './middleware/mod.ts';

// port to listen on
let port = Deno.env.get('PORT') ? parseInt(Deno.env.get('PORT')!) : 3001;

// initialize oak app
const app = new Application();

// middleware and routes
app.use(cors());
app.use(logger);
app.use(linksRouter.routes());
app.use(linksRouter.allowedMethods());
app.use(clicksRouter.routes());
app.use(clicksRouter.allowedMethods());
app.use(redirectRouter.routes());
app.use(redirectRouter.allowedMethods());

app.use(async (ctx, next) => {});

// listen for requests
await app.listen({ port });
