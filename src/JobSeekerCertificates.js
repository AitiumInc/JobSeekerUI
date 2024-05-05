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
  function JobSeekerCertificates() {

    const [data, setData] = useState(null);
    
    useEffect(() => {
      fetch('http://localhost:8080/GetJobseekerCertificatesByID?ID=1', options)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);
    
  
    return (
      <div>
        {data ? 
        <pre>
        <div class="job_details_area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="job_details_area">
                          <div class="container box_1170">
                            <div class="section-top-border">
                              <h3 class="mb-30">Certificates</h3>
                              <div class="progress-table-wrap">
                                <div class="progress-table">
                                  <div class="table-head">
                                    <div class="serial">#</div>
                                    <div class="country">Certificate</div>
                                    <div class="country">Date Obtained</div>
                                    <div class="country">Date Expired</div>
                                    <div class="serial">User ID</div>
                                  </div>
                                  {data.map((item, index) => (
                                    <div key={index}>
                                      <div class="col-md-12">
                                        <div class="table-row">
                                            <div class="serial">{data[index]["PK_ProfessionalCertificateID"] || ''}</div>
                                            <div class="country">{data[index]["ProfessionalCertificate"] || ''}</div>
                                            <div class="country">{data[index]["ProfessionalCertificateDateObtained"].substring(0,10) || ''}</div>
                                            <div class="country">{data[index]["ProfessionalCertificateExpirationDate"].substring(0,4) || ''}</div>
                                            <div class="serial">{data[index]["FK_JobseekerID"] || ''}</div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
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

  export default JobSeekerCertificates;