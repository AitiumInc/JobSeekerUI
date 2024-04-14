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


    const [fileUrl, setFileUrl] = useState('');
    const [fileName, setFileName] = useState('');

    
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
        const contentDisposition = response.headers.get('Content-Disposition');
        const filenameMatch = contentDisposition && contentDisposition.match(/filename="(.+)"/);
        const filename = filenameMatch ? filenameMatch[1] : 'file.txt';
        setFileUrl(url);
        setFileName(filename);
      } catch (error) {
        console.error('Error fetching file:', error);
      }
      
    };

    

    return (
      <div>
      <button onClick={fetchFile}>Fetch File</button>
      {fileUrl && (
        <a href={fileUrl} download={fileName}>
          Click to Download File
        </a>
      )}
    </div>
  );
  }

  export default JobSeekerResume;