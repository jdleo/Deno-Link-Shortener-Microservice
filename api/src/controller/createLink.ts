import { Context } from 'https://deno.land/x/oak/mod.ts';

const createLink = async (ctx: Context) => {
    ctx.response.body = { hello: 'world' };
};

export default createLink;
