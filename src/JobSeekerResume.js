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
  function JobSeekerResume() {

    const [data, setData] = useState(null);
    
    useEffect(() => {
      fetch('http://localhost:8080/GetResumeByID?ID=1', options)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);
    
    const handleFileClick = () => {
      if (data && data.ResumeFileContent) {
          // Convert resumefilecontent to Blob
          const blob = new Blob([data.ResumeFileContent], { type: 'application/octet-stream' });
          // Create URL for Blob
          const url = URL.createObjectURL(blob);
          // Open the URL in a new window
          window.open(url, '_blank');
      }
  };
  
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
                                   <h3>Jobseeker Resume</h3>
                                   <button onClick={() => handleFileClick(data)}>
            {data.ResumeFileName}
          </button>
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

  export default JobSeekerResume;