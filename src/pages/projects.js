import { projects } from "../data";
const ProjectsPage = () => {
    return `<div>Products Page</div>
    ${projects.map((project) => {
        return `<div>${project.id}</div>
        <h1 class="text-xl">${project.title}</h1>
        <p>${project.description}</p>
        <div>${project.createTime}</div>
        <div>SKILLS:<ul>${project.skills.map((skill)=>{
            return`<li>${skill}</li>`;
        }).join("")}</ul></div>
        <a src="${project.links}">GIT link</a>
        `
    })}
    `
}
export {ProjectsPage};
