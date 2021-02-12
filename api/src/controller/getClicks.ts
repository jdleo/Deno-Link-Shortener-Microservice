import { Context } from 'https://deno.land/x/oak/mod.ts';

const getClicks = async (ctx: Context) => {
    ctx.response.body = { hello: 'world' };
};

export default getClicks;
