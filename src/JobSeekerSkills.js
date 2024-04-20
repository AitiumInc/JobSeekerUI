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
  function JobSeekerSkills() {

    const [data, setData] = useState(null);
    
    useEffect(() => {
      fetch('http://localhost:8080/GetJobseekerSkillsByID?ID=1', options)
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
                    <div class="col-md-4 col-md-6">
                         <div class="item">
                              <div class="tst-author">
                                   <h3>Skills:</h3>
                                   <h4>{data[0].SkillsName || ""}</h4>
                                   <h4> </h4>
                                   <span>{data[0].SkillsNumYearsExperience || ""} years</span>
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

  export default JobSeekerSkills;