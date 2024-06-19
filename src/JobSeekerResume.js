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
  function JobSeekerResume() {


    const [fileUrl, setFileUrl] = useState('');
    const [fileName, setFileName] = useState('');
    const [disposition, setDisposition] = useState('');

    
    const fetchFile = async () => {
      try {
        const response = await fetch('http://localhost:8080/GetResumeByID?resumeID=1', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Add any necessary headers for authentication or other purposes
          },
        });
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        let filename = 'downloaded_file';
        const contentDisposition = response.headers.get('Content-Disposition');
        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename=(.+)/);
          if (filenameMatch) {
            filename = filenameMatch[1];
          }
        }
        setDisposition(contentDisposition);
        setFileUrl(url);
        setFileName(filename);
      } catch (error) {
        console.error('Error fetching file:', error);
      }
      
    };

    

    return (
    <div>
      <section class="contact-section section_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
                <div class="form-group mt-3">
                  <button type="submit" class="button button-contactForm btn_4 boxed-btn" onClick={fetchFile}>View Resume</button>
                  {fileUrl && (
                    <a href={fileUrl} download={fileName}>
                      Click to Download File
                    </a>
                  )}
                  <div>
                    <span>
                      {disposition}
                    </span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  }

  export default JobSeekerResume;