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
      <div class="container">
        {data ? 
        <pre>
              <div class="row">
                  <div class="col-lg-8">
                        <div class="container box_1170">
                          <div class="section-top-border">
                            <h3 class="mb-30">Experiences</h3>
                            <div class="progress-table-wrap">
                              <div class="progress-table">
                                <div class="table-head">
                                  <div class="serial">#</div>
                                  <div class="visit">Experience</div>
                                  <div class="visit">Role Description</div>
                                  <div class="visit">Years</div>
                                  <div class="visit">User ID</div>
                                </div>
                                
                                {data.map((item, index) => (
                                      <div class="table-row">
                                          <div class="serial">{data[index]["PK_ExperiencesID"].toString() || ''}</div>
                                          <div class="visit">{data[index]["ExperiencesRoleName"] || ''}</div>
                                          <div class="visit">{data[index]["ExperiencesRoleDescription"] || ''}</div>
                                          <div class="visit">{data[index]["ExperiencesStartDate"].substring(0, 4) || ''} - {data[index]["ExperiencesEndDate"].substring(0, 4) || ''}</div>
                                          <div class="visit">User ID</div>
                                      </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
        </pre> 
        : 'Loading...'}
      </div>
    );
  }

  export default JobSeekerExperiences;