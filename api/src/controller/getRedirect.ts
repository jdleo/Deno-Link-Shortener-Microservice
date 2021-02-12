import { Context } from 'https://deno.land/x/oak/mod.ts';

const getRedirect = async (ctx: Context) => {
    ctx.response.body = { hello: 'world' };
};

export default getRedirect;
