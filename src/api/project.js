import instance from "./config";

const getProjects = () => {
    return instance.get("/projects")
}
const getProject = (id) => {
    return instance.get(`/projects/${id}`)
}
const addProject = (newProject) => {
    return instance.post("/projects", newProject)
}
const delProject = (id) => {
    return instance.delete(`/projects/${id}`)
}
const editProject = (project) => {
    return instance.put(`/projects/${project.id}`,project)
}
export {addProject, delProject, editProject, getProject, getProjects } ;