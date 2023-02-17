import { useEffect, useState, router } from "../../utilities";
import axios from "axios";
import { editProject, getProject } from "../../api/project";
const AdminEditProjectPage = ({id}) => {
const [data, setData] = useState({})

  useEffect(()=>{
    // fetch(`http://localhost:3000/projects/${id} `).then((response)=>response.json()).then((data)=>setData(data))
    // // axios.get(`http://localhost:3000/projects/${id}`).then(({data})=>setData(data))
    getProject(id).then(({data})=>setData(data))
  },[])
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const title = document.getElementById("project-title");
        const description = document.getElementById("project-description");
        const createTime = document.getElementById("project-createtime");
        const skills = document.getElementById("project-skills");
        const link = document.getElementById("project-link");
    const projectImage = document.getElementById("project-img");

    
        form.addEventListener("submit", async (e)=>{
          e.preventDefault();
      const url = await uploadFiles(projectImage.files)

          const newProjects = {
            id,
            title: title.value,
            description: description.value,
            createTime: createTime.value,
            skills: skills.value,
            link: link.value,
            urlimgs : url,
          };
          // fetch(`http://localhost:3000/projects/${id}`, {
          //   method: "PUT",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify(newProjects),
          // }).then(() => {
          //   router.navigate("/admin/projects");
          // });
          // // axios.put(`http://localhost:3000/projects/${id}`,newProjects).then(()=>{
          // //   router.navigate("/admin/projects");
          // // })
          editProject(newProjects).then(()=>{
            router.navigate("/admin/projects");
          })
        });
      });
      const uploadFiles = async(files) => {
    
        const CLOUD_NAME = "dqzopvk2t";
        const PRESET_NAME = "ph26019"
        const urls = [];
        const FOLDER_NAME = "ecma";
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
        
        const formData = new FormData(); //key:value
        formData.append("upload_preset", PRESET_NAME);
        formData.append("folder", FOLDER_NAME);
    
        for (const file of files){
        formData.append("file", file);
    
        const response = await axios.post(api, formData,{
          headers: {
            "Content-Type": "multipart/form-data",
          }
        });
        urls.push(response.data.secure_url)
          
        }
        console.log(urls)
    return urls
      }
  return  `
  <div class="container"><form action="" id="form-add">
      <table>
      <tr>
      <td><label class="text-red-700">Title</label></td>
      <td><input type="text" name="" id="project-title" value="${data.title ?? ""}"></td>
    </tr>
    <tr>
      <td><label>Description</label></td>
       <td><input type="text" name="" id="project-description" value="${data.description ?? ""}"></td>
    </tr>
    <tr>
       <td><label>CreateTime</label></td>
       <td><input type="text" name="" id="project-createtime" value="${data.createTime ?? ""}"></td>
    </tr>
    <tr>
       <td><label>Skills</label></td>
       <td><input type="text" name="" id="project-skills" value="${data.skills ?? ""}"></td>
    </tr>
    <tr>
      <td><label>Links</label></td>
      <td><input type="text" name="" id="project-link" value="${data.link ?? ""}"></td>
    </tr>
    <tr>
    <td><label>Project Images</label></td>
    <td><input type="file" name="" id="project-img" multiple class="form-control"></td>
  </tr>
      </table>
  <div class=""><button class="btn btn-blue">Save</button></div>
</form></div>`;
}

export default AdminEditProjectPage