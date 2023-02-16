import { useEffect, useState, router } from "../../utilities";
const AdminEditProjectPage = ({id}) => {
const [data, setData] = useState({})

  useEffect(()=>{
    fetch(`http://localhost:3000/projects/${id} `).then((response)=>response.json()).then((data)=>setData(data))
  },[])
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
          fetch(`http://localhost:3000/projects/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newProjects),
          }).then(() => {
            router.navigate("/admin/projects");
          });
        });
      });
  return  `
  <div class="container"><form action="" id="form-add">
  <div>
    <label class="text-red-700">Title</label>
    <input type="text" name="" id="project-title" value="${data.title ?? ""}">
  </div>
  <div>
    <label>Description</label>
    <input type="text" name="" id="project-description" value="${data.description ?? ""}">
  </div>
  <div>
    <label>CreateTime</label>
    <input type="text" name="" id="project-createtime" value="${data.createTime ?? ""}">
  </div>
  <div>
    <label>Skills</label>
    <input type="text" name="" id="project-skills" value="${data.skills ?? ""}">
  </div>
  <div>
    <label>Links</label>
    <input type="text" name="" id="project-link" value="${data.link ?? ""}">
  </div>
  <div class=""><button class="btn btn-blue">Save</button></div>
</form></div>`;
}

export default AdminEditProjectPage