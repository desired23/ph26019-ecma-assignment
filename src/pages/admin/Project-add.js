import { useEffect, router } from "../../utilities";
// import { projects } from "../../data";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { addProject } from "../../api/project";
const AdminAddProjectPage = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const title = document.getElementById("project-title");
    const description = document.getElementById("project-description");
    const createTime = document.getElementById("project-createtime");
    const skills = document.getElementById("project-skills");
    const link = document.getElementById("project-link");
    //
    const projectImage = document.getElementById("project-img");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const urls = uploadFiles(projectImage.files)
      console.log(urls)
      const newProjects = {
        title: title.value,
        description: description.value,
        createTime: createTime.value,
        skills: skills.value,
        link: link.value,
        urls,
      };
      // fetch("http://localhost:3000/projects", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(newProjects),
      // }).then(() => {
      //   router.navigate("/admin/projects");
      // });
      addProject(newProjects).then(()=>{
        router.navigate("/admin/projects");
      })
      // axios.post("http://localhost:3000/projects",newProjects).then(()=>{
      //   router.navigate("/admin/projects");
      // })
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
    <div>
    <label>Project Images</label>
    <input type="file" name="" id="project-img" multiple class = "form-control">
  </div>
    <div class=""><button class="btn btn-blue">Add project</button></div>
  </form></div>`;
};

export default AdminAddProjectPage;
