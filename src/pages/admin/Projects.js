// import { projects } from "../../data";
import { useEffect, useState } from "../../utilities";
const AdminProjectsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    console.log(btns);
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;

        fetch(`http://localhost:3000/projects/${id}`, {
          method: "Delete",
        }).then(() => {
          const newProjects = data.filter((item) => item.id !== +id);
          setData(newProjects);
        });
      });
    }
  });

  return `
    <div class="">
    <table>
    <thead>
  <tr>
    <td>STT</td>
    <td>Title</td>
    <td>Description</td>
    <td>CreateTime</td>
    <td>Skills</td>
    <td>Links</td>
    <td>Actions</td>
  </tr>
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
    <td>
      <button class="btn btn-danger btn-remove" data-id = "${project.id}">Remove</button>
      <a href="/admin/projects/${project.id}/edit" class="btn">Edit</a>
      
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
