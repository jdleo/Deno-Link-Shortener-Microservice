import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getClicks } from '../controller/mod.ts';

// new router instance
const router = new Router();

// base path
const base: string = '/clicks';

// set up routes
router.get(base + '/:code/:password', getClicks);

export default router;
