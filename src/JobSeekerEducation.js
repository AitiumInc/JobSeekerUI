import React, { useState, useEffect } from 'react';
import UpdateJobseekerEducation from './UpdateJobseekerEducation';

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
    const [item, setItem] = useState(null);
    const [data, setData] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:8080/GetJobseekerEducationByID?ID=1', options)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);
    
    const PopupWindow = ({ isOpen, onClose, jobseeker }) => {
      if (!isOpen) return null;
      return (
        <div className="popup-container">
          <div className="popup-content">
          <button className="close-button" onClick={onClose}>&times;</button>
            <UpdateJobseekerEducation newData={jobseeker}/>
          </div>
        </div>
      );
    };
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = (item) => {
      setPopupOpen(true);
      setItem(item);
    };

    const closePopup = () => {
      setPopupOpen(false);
    };
  
  return (
    <div class="row">
      {data ? 
        <div class="col-lg-8">
          <div class="container box_1170">
            <div class="section-top-border">
              <h3 class="mb-30">Education</h3>
              <div class="progress-table-wrap">
                <div class="progress-table">
                  <div class="table-head">
                    <div class="serial">#</div>
                    <div class="visit">Institution</div>
                    <div class="visit">Degree</div>
                    <div class="visit">Years</div>
                    <div class="visit">User ID</div>
                    <div class="visit">Edit</div>
                  </div>
                  {data.map((item, index) => (
                    <div key={index}>
                      <div class="col-md-12">
                        <div class="table-row">
                          <div class="serial">{data[index]["PK_EDID"] || ''}</div>
                          <div class="visit">{data[index]["EDInstitutionName"] || ''}</div>
                          <div class="visit">{data[index]["EDHighestDegree"] || ''}</div>
                          <div class="visit">{data[index]["EDStartingDate"].substring(0,4) || ''} - {data[index]["EDEndingDate"].substring(0,4) || ''}</div>
                          <div class="visit">{data[index]["FK_JobseekerID"] || ''}</div>
                          <div class="visit">
                            <button class="genric-btn info-border circle" key={index} onClick={() => openPopup(data[index])}>Edit</button>
                          </div> 
                        </div>
                      </div>
                    </div>
                  ))}
                <PopupWindow isOpen={isPopupOpen} onClose={closePopup} jobseeker={item}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      : 'Loading...'}
    </div>
    );
  }

  export default JobSeekerEducation;