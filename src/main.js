const app = document.querySelector("#app");
import Homepage from './pages/HomePage';
import { render, router } from './utilities';
import About from './pages/About';
import NotFound from './pages/NotFound'
import { ProjectsPage } from './pages/projects';
import AdminProjectsPage from './pages/admin/Projects';
import AdminAddProjectPage from './pages/admin/Project-add';
import AdminEditProjectPage from './pages/admin/Projects-edit';

router.on('/', ()=>render(Homepage, app));
router.on('/about', ()=>render(About, app));
router.on("/projects-page", () => render(ProjectsPage, app))
router.notFound(()=>render(NotFound, app))

//admin

router.on("/admin/projects", () => render(AdminProjectsPage, app))
router.on("/admin/projects/add", () => render(AdminAddProjectPage, app))
router.on("/admin/projects/:id/edit",({data})=>render(()=>AdminEditProjectPage(data), app))
router.resolve();
