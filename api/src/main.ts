import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

// import db client
import { client } from './db/mod.ts';

// import routes
import { clicksRouter, linksRouter, redirectRouter } from './routes/mod.ts';

// custom middleware
import { logger, cors } from './middleware/mod.ts';

// port to listen on
let port = Deno.env.get('PORT') ? parseInt(Deno.env.get('PORT')!) : 3001;

// initialize oak app
const app = new Application();

// set up tables
console.info('setting up tables in database...');
await client.queryObject({
    text:
        'CREATE TABLE IF NOT EXISTS links (code CHAR(5) PRIMARY KEY, url VARCHAR(200), password CHAR(64), created_at BIGINT)',
});
await client.queryObject({
    text:
        'CREATE TABLE IF NOT EXISTS clicks (code CHAR(5) PRIMARY KEY, clicks BIGINT)',
});

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
console.info(`ready to serve on port ${port}!`);
await app.listen({ port });
