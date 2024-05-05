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
  function Title() {

    const [data, setData] = useState(null);
    
    useEffect(() => {
      fetch('http://localhost:8080/GetJobseekerByID?ID=1', options)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);
    

  
    return (
      
        <div class="bradcam_area bradcam_bg_1">
         
        {data ? 
        <pre>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="bradcam_text">
                                <h3>Title</h3>
                            </div>
                        </div>
                    </div>
                </div>
        </pre> 
        : 'Loading...'}
      </div>
    );
  }

  export default Title;