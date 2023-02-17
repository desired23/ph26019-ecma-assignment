// import { projects } from "../../data";
import { useEffect, useState } from "../../utilities";
import axios from "axios";
import { delProject, getProjects } from "../../api/project";
import './project.css'

const AdminProjectsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3000/projects")
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
    // // axios.get("http://localhost:3000/projects").then(({data})=>setData(data))
    getProjects().then(({data})=>setData(data))
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    console.log(btns);
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        const confirm = window.confirm("Ban co muon xoa khong");
        if (confirm){
          delProject(id).then(()=>{
            const newProjects = data.filter((item) => item.id !== +id);
            setData(newProjects);
          }).catch((err)=>console.log(err))
        }
        // fetch(`http://localhost:3000/projects/${id}`, {
        //   method: "Delete",
        // }).then(() => {
        //   const newProjects = data.filter((item) => item.id !== +id);
        //   setData(newProjects);
        // });

        // // axios.delete(`http://localhost:3000/projects/${id}`).then(()=>{
        // //   const newProjects = data.filter((item) => item.id !== +id);
        // //   setData(newProjects);
        // // })


      });
    }
  });

  return `
    <div class="container">
    <table class="">
    <thead><tr>
    <td class="">STT</td>
    <td class="">Title</td>
    <td>Description</td>
    <td>CreateTime</td>
    <td>Skills</td>
    <td>Links</td>
    <td>Image</td>
    <td>Actions</td>
  </tr></thead>
  
</thead>
<tbody>
    ${data
      .map(
        (project) => `
    <tr>
    <td>${project.id}</td>
    <td>${project.title}</td>
    <td>${project.description}</td>
    <td>${project.createTime}</td>
    <td>${project.skills}</td>
    <td>${project.link}</td>
    <td>${project.urlimgs?.map((url)=>`<img style="width:100px" src="${url}">`).join("")}</td>
    <td class="act">
      <button class="btn btn-danger btn-remove bg-red-400" data-id = "${project.id}">Remove</button>
      <a href="/admin/projects/${project.id}/edit" class="btn btn-edit">Edit</a>
      
    </td>
  </tr>
    `
      )
      .join("")}
  
</tbody>
</table>
    </div>
    `;
};
export default AdminProjectsPage;
