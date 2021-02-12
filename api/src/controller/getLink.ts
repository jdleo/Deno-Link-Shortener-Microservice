import { Context } from 'https://deno.land/x/oak/mod.ts';

const getLink = async (ctx: Context) => {
    ctx.response.body = { hello: 'world' };
};

export default getLink;
