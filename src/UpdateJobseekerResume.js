import React, { useState, useEffect } from 'react';

function UpdateJobSeekerResume() {

        

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({});
    const [id, setID] = useState(0);
    
    const handleFileChange = (event) => {
      setData(event.target.files[0]);
    };
  
    const handleIdChange = (event) => {
      setID(event.target.value);
    };
   

    const handleUpload = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
          const formData = new FormData();
          formData.append('resumeFile', data);
          formData.append('resumeID', id);
          

          const headers = {
            // Construct the Content-Type header with the boundary
            //'Content-Type': `multipart/form-data; boundary=${boundary}`,
          };

          const response = await fetch('http://localhost:8080/UpdateJobseekerResume', {
            method: 'POST',
            headers: headers,
            
            body: formData,
          });
          if (response.ok) {
            console.log('Data successfully submitted');
            // Optionally, you can reset the form after successful submission
            // setFormData({});
          } else {
            throw new Error('Failed to submit data');
          }
        } catch (error) {
          console.error('Error submitting data:', error);
        }
        setIsLoading(false);
      };
    

    return (
        
      <div>
        <div class="job_details_area">
          <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="apply_job_form white-bg">
                        <h4>Upload a resume</h4>
                        <form action="#">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="input_field">
                                        <input type="number" placeholder="User ID" onChange={handleIdChange}></input>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                          <button type="button" id="inputGroupFileAddon03"><i class="fa fa-cloud-upload" aria-hidden="true"></i>
                                          </button>
                                        </div>
                                        <div class="custom-file">
                                          <input type="file" class="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" onChange={handleFileChange}></input>
                                          <label class="custom-file-label" for="inputGroupFile03">Upload CV</label>
                                        </div>
                                      </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="submit_btn">
                                        <button class="boxed-btn3 w-100" type="submit" onClick={handleUpload}>Upload</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default UpdateJobSeekerResume;