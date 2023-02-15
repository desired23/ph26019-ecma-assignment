import { useEffect, router } from "../../utilities";
import { projects } from "../../data";
import { v4 as uuidv4 } from "uuid";
const AdminAddProjectPage = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const title = document.getElementById("project-title");
    const description = document.getElementById("project-description");
    const createTime = document.getElementById("project-createtime");
    const skills = document.getElementById("project-skills");
    const link = document.getElementById("project-link");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const newProjects = {
        title: title.value,
        description: description.value,
        createTime: createTime.value,
        skills: skills.value,
        link: link.value,
      };
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProjects),
      }).then(() => {
        router.navigate("/admin/projects");
      });
    });
  });
  return `
    <div class="container"><form action="" id="form-add">
    <div>
      <label class="text-red-700">Title</label>
      <input type="text" name="" id="project-title">
    </div>
    <div>
      <label>Description</label>
      <input type="text" name="" id="project-description">
    </div>
    <div>
      <label>CreateTime</label>
      <input type="text" name="" id="project-createtime">
    </div>
    <div>
      <label>Skills</label>
      <input type="text" name="" id="project-skills">
    </div>
    <div>
      <label>Links</label>
      <input type="text" name="" id="project-link">
    </div>
    <div class=""><button class="btn btn-blue">Add project</button></div>
  </form></div>`;
};

export default AdminAddProjectPage;
