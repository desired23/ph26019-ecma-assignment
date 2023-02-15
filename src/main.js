const app = document.querySelector("#app");
import Homepage from './pages/HomePage';
import { render, router } from './utilities';
import About from './pages/About';
import NotFound from './pages/NotFound'


router.on('/', ()=>render(Homepage, app));
router.on('/about', ()=>render(About, app));

router.notFound(()=>render(NotFound, app))

router.resolve();
