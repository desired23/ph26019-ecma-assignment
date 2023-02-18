import axios from "axios"
import { getProjects } from "../api/project"
import { useEffect, useState } from "../utilities";



 


const showProjects = () => {
    let [data, setData] = useState([])
useEffect(()=>{
    getProjects().then(({data})=>setData(data))
},[])
  return `
  <section class="section bg-custom-gray" id="portfolio">
        <div class="container">
            <h1 class="mb-5"><span class="text-danger">Các dự án</span> đã tham gia</h1>
            <div class="portfolio">
                <div class="filters">
                    <a href="#" data-filter=".new" class="active">
                        New
                    </a>
                    <a href="#" data-filter=".advertising">
                        Advertising
                    </a>
                    <a href="#" data-filter=".branding">
                        Branding
                    </a>
                    <a href="#" data-filter=".web">
                        Web
                    </a>
                </div>
                <div class="portfolio-container" style="display:flex;flex-wrap: wrap; "> 
${data.map((prj)=>`
<div class="col-md-6 col-lg-4 web new">
<div class="portfolio-item">
    ${prj.urlimgs?.map((url)=>`<img class="img-fluid" src="${url}">`).join("")}
    <div class="content-holder">
        <a class="img-popup" href=""></a>
        <div class="text-holder">
            <h6 class="title">${prj.title}</h6>
            <p class="subtitle">${prj.description}</p>
            <a class="subtitle" href="${prj.link}">GitHub</a>
        </div>
    </div>   
</div>             
</div>
`).join("")}
                </div> 
            </div>  
        </div>            
    </section>` 
     

    
 
     
}

export default showProjects