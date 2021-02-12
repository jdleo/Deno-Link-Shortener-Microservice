import { Client } from 'https://deno.land/x/postgres/mod.ts';

// initialize client with config
const client = new Client({
    user: 'postgres',
    password: 'secretpassword',
    database: 'main',
    hostname: 'localhost',
    port: 5432,
});

// connect to client
await client.connect();

export { client };
