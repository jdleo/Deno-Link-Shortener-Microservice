import { Router } from 'https://deno.land/x/oak/mod.ts';
import {
    createLink,
    listLinks,
    getLink,
    deleteLink,
} from '../controller/mod.ts';

// new router instance
const router = new Router();

// base path
const base: string = '/links';

// set up routes
router
    .get(base + '/', listLinks)
    .post(base + '/', createLink)
    .get(base + '/:code', getLink)
    .delete(base + '/:code', deleteLink);

export default router;
