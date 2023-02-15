const app = document.querySelector("#app");
import Homepage from './pages/HomePage';
import { render, router } from './utilities';
import About from './pages/About';
import NotFound from './pages/NotFound'
import { ProjectsPage } from './pages/projects';

router.on('/', ()=>render(Homepage, app));
router.on('/about', ()=>render(About, app));
router.on("/projects-page", () => render(ProjectsPage, app))
router.notFound(()=>render(NotFound, app))

router.resolve();
