import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getRedirect } from '../controller/mod.ts';

// new router instance
const router = new Router();

// base path
const base: string = '';

// set up routes
router.get(base + '/:code', getRedirect);

export default router;
