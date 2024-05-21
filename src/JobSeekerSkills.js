import React, { useState, useEffect } from 'react';
import UpdateJobseekerSkills from './UpdateJobseekerSkills';

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
function JobSeekerSkills() {

  const [data, setData] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/GetJobseekerSkillsByID?ID=1', options)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);
  
  const PopupWindow = ({ isOpen, onClose, i }) => {
    if (!isOpen) return null;
    return (
      <div className="popup-container">
        <div className="popup-content">
          {/* Content of your pop-up window */}
          <UpdateJobseekerSkills index={i} />
          <button onClick={onClose}>{i}</button>
        </div>
      </div>
    );
  };
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
      setPopupOpen(true);
      setSelectedIndex(0);
    };

    const closePopup = () => {
      setPopupOpen(false);
    };

  return (
    
    <div class="row">
      {data ? 
      <pre>
        <div class="col-lg-8">
          <div class="container box_1170">
            <div class="section-top-border">
              <h3 class="mb-30">Skills</h3>
                <div class="progress-table-wrap">
                  <div class="progress-table">
                    <div class="table-head">
                      <div class="serial">#</div>
                      <div class="country">Skill Name</div>
                      <div class="country">Years</div>
                      <div class="serial">User ID</div>
                    </div>
                    {data.map((item, index) => (
                      <div key={index}>
                        <div class="col-md-12">
                          <div class="table-row">
                            <div class="serial">{data[index]["PK_SkillsID"] || ''}</div>
                            <div class="country">{data[index]["SkillsName"] || ''}</div>
                            <div class="country">{data[index]["SkillsNumYearsExperience"] || ''}</div>
                            <div class="serial">{data[index]["FK_JobseekerID"] || ''}</div>
                            <div className="app">
                              <button class="genric-btn info-border circle" onClick={openPopup}>Edit</button>
                              <PopupWindow isOpen={isPopupOpen} onClose={closePopup} i={selectedIndex}/>
                            </div> 
                          </div>
                        </div>
                      </div>
                    ))}
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

export default JobSeekerSkills;