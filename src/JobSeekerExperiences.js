import React, { useState, useEffect } from 'react';

var options = {  
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Headers': "*"
    },
    mode: 'cors',
    crossorigin: true
  }
  function JobSeekerExperiences() {

    const [data, setData] = useState(null);
    
    useEffect(() => {
      fetch('http://localhost:8080/GetJobseekerExperiencesByID?ID=1', options)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);
    
  
    return (
      <div>
        {data ? 
        <pre>
        <section id="testimonial" class="section-background">
          <div class="container">
               <div class="row">
                    <div class="col-sm-4 col-xs-12">
                         <div class="item">
                              <div class="tst-author">
                                   <h3>Experience:</h3>
                                   <h4>Role Played</h4>
                                   <span>{data[0].ExperiencesRoleName || ""}</span>
                                   <h4>Role Description</h4>
                                   <span>{data[0].ExperiencesRoleDescription || " "}</span>
                                   <h4>Dates</h4>
                                   <span>{data[0].ExperiencesStartDate || ""} to {data[0].ExperiencesEndDate || ""}</span>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </section> 
        
        </pre> 
        : 'Loading...'}
      </div>
    );
  }

  export default JobSeekerExperiences;