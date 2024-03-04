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
  function JobSeekerProfile() {

    const [data, setData] = useState(null);
    
    useEffect(() => {
      fetch('http://localhost:8080/GetJobseekerByID?ID=1', options)
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
                              <div class="tst-image">
                                   <img></img>
                              </div>
                              <div class="tst-author">
                                   <h3>{data.JobseekerFirstName || ""}{data.JobseekerMiddleName  || " "}{data.JobseekerLastName || ""}</h3>
                                   <span>{data.JobseekerTitle}</span>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="row">
                   <div class="col-sm-4 col-xs-12">
                         <div class="item">
                              <div class="tst-author">
                                   <h3>About Me</h3>
                                   <h4>Name</h4>
                                   <span>{data.JobseekerFirstName || ""}</span>
                                   <h4>Email Address</h4>
                                   <span>{data.JobseekerEmail || ""}</span>
                                   <h4>Phone Number</h4>
                                   <span>{data.JobseekerPhoneNumber || ""}</span>

                              </div>
                         </div>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                         <div class="item">
                              <div class="tst-author">
                                   <h3>Address</h3>
                                   <h4>{data.JobseekerAddress || ""}</h4>
                                   <h4>{data.JobseekerCity || ""}</h4>
                                   <h4>{data.JobseekerState || ""}</h4>
                                   <h4>{data.JobseekerCountry || ""}</h4>

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

  export default JobSeekerProfile;