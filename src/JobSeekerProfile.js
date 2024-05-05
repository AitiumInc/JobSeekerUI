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
  function JobSeekerProfile() {

    const [data, setData] = useState(null);
    
    useEffect(() => {
      fetch('http://localhost:8080/GetJobseekerByID?ID=1', options)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);
    

  
    return (
        <div class="row">
         
        {data ? 
        <pre>
                        <div class="col-lg-8">
                            <div class="job_details_header">
                                <div class="single_jobs white-bg d-flex justify-content-between">
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="jobs_conetent">
                                            <a href="#"><h4>{data.JobseekerFirstName || ""}{data.JobseekerMiddleName  || " "}{data.JobseekerLastName || ""}</h4></a>
                                            <div class="links_locat d-flex align-items-center">
                                                <div class="location">
                                                    <p> <i class="fa fa-map-marker"></i> {data.JobseekerState || ""}, {data.JobseekerCountry}</p>
                                                </div>
                                                <div class="location">
                                                    <p> <i class="fa fa-clock-o"></i> Part-time</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jobs_right">
                                        <div class="apply_now">
                                            <a class="heart_mark" href="#"> <i class="ti-heart"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="descript_wrap white-bg">
                                <div class="single_wrap">
                                    <h4>Name</h4>
                                    <p>{data.JobseekerFirstName || ""}{data.JobseekerMiddleName  || " "}{data.JobseekerLastName || ""}</p>
                                </div>
                                <div class="single_wrap">
                                    <h4>Email</h4>
                                    <p>{data.JobseekerEmail || ""}</p>
                                </div>
                                <div class="single_wrap">
                                    <h4>Phone Number</h4>
                                    <p>{data.JobseekerPhoneNumber || ""}</p>
                                </div>
                                <div class="single_wrap">
                                    <h4>Address</h4>
                                    <p>{data.JobseekerAddress || ""}, {data.JobseekerCity || ""}</p>
                            </div>
                        </div>
                    </div>
        </pre> 
        : 'Loading...'}
      </div>
    );
  }

  export default JobSeekerProfile;