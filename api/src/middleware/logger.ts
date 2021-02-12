import { Context } from 'https://deno.land/x/oak/mod.ts';

const logger = async (
    ctx: Context<Record<string, any>>,
    next: () => Promise<void>,
) => {
    // start time of request
    const start = Date.now();
    // wait for request to finish
    await next();
    // get elapsed time
    const ms = Date.now() - start;
    // get method, url
    const { method, url } = ctx.request;
    // log
    console.info(`${method} ${url} - ${ms} ms`);
};

export default logger;
