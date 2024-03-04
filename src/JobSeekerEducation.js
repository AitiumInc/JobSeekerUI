import React, { useState, useEffect } from 'react';
import './css/style.css';

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
  function JobSeekerEducation() {

    const [data, setData] = useState(null);
    
    useEffect(() => {
      fetch('http://localhost:8080/GetJobseekerEducationByID?ID=1', options)
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
                                   <h3>Education:</h3>
                                   <h4>Institution</h4>
                                   <span>{data[0].EDInstitutionName || ""}</span>
                                   <h4>Degree</h4>
                                   <span>{data[0].EDHighestDegree || ""}</span>
                                   <h4>Dates</h4>
                                   <span>{data[0].EDStartingDate || ""} to {data[0].EDEndingDate || ""}</span>
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

  export default JobSeekerEducation;